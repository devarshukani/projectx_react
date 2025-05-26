import React, { useState, useEffect } from 'react';
import { Table, Tabs, Tag, Space, Card, Row, Col, Select, Divider } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

const TestAnalysisDashboard = ({ testId, attemptId }) => {
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);
  const [attemptData, setAttemptData] = useState(null);
  const [transformedQuestions, setTransformedQuestions] = useState([]);
  const [filters, setFilters] = useState({
    subject: null,
    topic: null,
    status: null,
    difficulty: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch test data
        const testResponse = await fetch(`http://13.203.220.236/api/tests/${testId}`);
        const testJson = await testResponse.json();
        setTestData(testJson.data);
        
        // Fetch attempt data
        const attemptResponse = await fetch(`http://13.203.220.236/api/test-attempt-answers/${attemptId}`);
        const attemptJson = await attemptResponse.json();
        setAttemptData(attemptJson.data);
        
        // Transform data
        const transformed = transformData(testJson.data, attemptJson.data);
        setTransformedQuestions(transformed);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [testId, attemptId]);

  const transformData = (testData, attemptData) => {
    return testData.questions.map(question => {
      const attempt = attemptData.find(a => a.question_id === question.id) || {};
      
      return {
        id: question.id,
        questionText: question.question,
        questionImage: question.que_image,
        options: question.options.map(option => ({
          id: option.id,
          text: option.name,
          isCorrect: option.is_answer,
          isSelected: option.id === attempt.selected_option
        })),
        explanation: question.explanation,
        explanationImages: question.exp_image,
        difficulty: question.difficulty_level,
        subject: question.subjectData || { id: question.subject, name: 'Unknown' },
        topic: question.topicData || { id: question.topic, name: 'Unknown' },
        microTopics: question.microTopicsData,
        isAttempted: !!attempt.selected_option,
        isCorrect: attempt.is_correct,
        isIncorrect: attempt.is_incorrect,
        isSkipped: attempt.is_skipped,
        selectedOption: attempt.selected_option,
        timeTaken: attempt.time_taken,
        correctMarks: parseFloat(testData.correct_marks),
        incorrectMarks: parseFloat(testData.incorrect_marks)
      };
    });
  };

  const getFilteredQuestions = () => {
    return transformedQuestions.filter(question => {
      return (
        (!filters.subject || question.subject.id === filters.subject) &&
        (!filters.topic || question.topic.id === filters.topic) &&
        (!filters.status || 
          (filters.status === 'attempted' && question.isAttempted) ||
          (filters.status === 'unattempted' && !question.isAttempted) ||
          (filters.status === 'correct' && question.isCorrect) ||
          (filters.status === 'incorrect' && question.isIncorrect) ||
          (filters.status === 'skipped' && question.isSkipped)
        ) &&
        (!filters.difficulty || question.difficulty === filters.difficulty)
      );
    });
  };

  const getSummaryStats = () => {
    const total = transformedQuestions.length;
    const attempted = transformedQuestions.filter(q => q.isAttempted).length;
    const correct = transformedQuestions.filter(q => q.isCorrect).length;
    const incorrect = transformedQuestions.filter(q => q.isIncorrect).length;
    const skipped = transformedQuestions.filter(q => q.isSkipped).length;
    
    const totalMarks = correct * transformedQuestions[0]?.correctMarks + 
                      incorrect * transformedQuestions[0]?.incorrectMarks;
    
    return { total, attempted, correct, incorrect, skipped, totalMarks };
  };

  const summary = getSummaryStats();
  const filteredQuestions = getFilteredQuestions();

  const columns = [
    {
      title: 'Question',
      dataIndex: 'questionText',
      key: 'question',
      render: (text, record) => (
        <div>
          <div>{text}</div>
          {record.questionImage && (
            <img src={record.questionImage} alt="Question" style={{ maxWidth: '200px', marginTop: '10px' }} />
          )}
        </div>
      )
    },
    {
      title: 'Subject/Topic',
      key: 'subject',
      render: (_, record) => (
        <div>
          <div><strong>Subject:</strong> {record.subject.name}</div>
          <div><strong>Topic:</strong> {record.topic.name}</div>
          <div>
            <strong>Micro Topics:</strong> 
            {record.microTopics.map(mt => (
              <Tag key={mt.id} style={{ marginLeft: '5px' }}>{mt.name || 'Unknown'}</Tag>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Options',
      key: 'options',
      render: (_, record) => (
        <div>
          {record.options.map(option => (
            <div 
              key={option.id}
              style={{
                padding: '5px',
                margin: '2px 0',
                backgroundColor: option.isSelected 
                  ? option.isCorrect 
                    ? '#d4edda' 
                    : '#f8d7da'
                  : option.isCorrect
                    ? '#f8f9fa'
                    : 'transparent',
                border: option.isCorrect ? '1px solid #28a745' : '1px solid transparent'
              }}
            >
              {option.text}
              {option.isSelected && <Tag color={option.isCorrect ? "success" : "error"} style={{ marginLeft: '10px' }}>
                {option.isCorrect ? "Your Answer" : "Wrong Answer"}
              </Tag>}
              {option.isCorrect && !option.isSelected && <Tag color="success" style={{ marginLeft: '10px' }}>Correct Answer</Tag>}
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => {
        let status, color;
        if (record.isSkipped) {
          status = 'Skipped';
          color = 'default';
        } else if (record.isCorrect) {
          status = 'Correct';
          color = 'success';
        } else if (record.isIncorrect) {
          status = 'Incorrect';
          color = 'error';
        } else {
          status = 'Not Attempted';
          color = 'warning';
        }
        
        return (
          <div>
            <Tag color={color}>{status}</Tag>
            <div>Time: {record.timeTaken || 0}s</div>
          </div>
        );
      }
    },
    {
      title: 'Difficulty',
      key: 'difficulty',
      render: (_, record) => (
        <div>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: i < record.difficulty ? '#ffc107' : '#e4e5e9' }}>★</span>
          ))}
        </div>
      )
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!testData || !attemptData) {
    return <div>Error loading data</div>;
  }

  // Get unique subjects and topics for filters
  const uniqueSubjects = [...new Set(transformedQuestions.map(q => q.subject.id))]
    .map(id => {
      const subject = transformedQuestions.find(q => q.subject.id === id).subject;
      return { id: subject.id, name: subject.name };
    });

  const uniqueTopics = [...new Set(transformedQuestions.map(q => q.topic.id))]
    .map(id => {
      const topic = transformedQuestions.find(q => q.topic.id === id).topic;
      return { id: topic.id, name: topic.name };
    });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Analysis: {testData.name}</h1>
      
      <Card style={{ marginBottom: '20px' }}>
        <Row gutter={16}>
          <Col span={4}>
            <Card size="small" title="Total Questions" bordered={false}>
              {summary.total}
            </Card>
          </Col>
          <Col span={4}>
            <Card size="small" title="Attempted" bordered={false}>
              {summary.attempted} ({Math.round((summary.attempted / summary.total) * 100)}%)
            </Card>
          </Col>
          <Col span={4}>
            <Card size="small" title="Correct" bordered={false}>
              {summary.correct} ({Math.round((summary.correct / summary.total) * 100)}%)
            </Card>
          </Col>
          <Col span={4}>
            <Card size="small" title="Incorrect" bordered={false}>
              {summary.incorrect} ({Math.round((summary.incorrect / summary.total) * 100)}%)
            </Card>
          </Col>
          <Col span={4}>
            <Card size="small" title="Skipped" bordered={false}>
              {summary.skipped} ({Math.round((summary.skipped / summary.total) * 100)}%)
            </Card>
          </Col>
          <Col span={4}>
            <Card size="small" title="Total Marks" bordered={false}>
              {summary.totalMarks.toFixed(2)}
            </Card>
          </Col>
        </Row>
      </Card>
      
      <Card style={{ marginBottom: '20px' }}>
        <Space size="large">
          <Select
            placeholder="Filter by Subject"
            style={{ width: 200 }}
            onChange={value => setFilters({...filters, subject: value})}
            allowClear
          >
            {uniqueSubjects.map(subject => (
              <Option key={subject.id} value={subject.id}>{subject.name}</Option>
            ))}
          </Select>
          
          <Select
            placeholder="Filter by Topic"
            style={{ width: 200 }}
            onChange={value => setFilters({...filters, topic: value})}
            allowClear
          >
            {uniqueTopics.map(topic => (
              <Option key={topic.id} value={topic.id}>{topic.name}</Option>
            ))}
          </Select>
          
          <Select
            placeholder="Filter by Status"
            style={{ width: 200 }}
            onChange={value => setFilters({...filters, status: value})}
            allowClear
          >
            <Option value="attempted">Attempted</Option>
            <Option value="unattempted">Unattempted</Option>
            <Option value="correct">Correct</Option>
            <Option value="incorrect">Incorrect</Option>
            <Option value="skipped">Skipped</Option>
          </Select>
          
          <Select
            placeholder="Filter by Difficulty"
            style={{ width: 200 }}
            onChange={value => setFilters({...filters, difficulty: value})}
            allowClear
          >
            <Option value={1}>Easy (1★)</Option>
            <Option value={2}>Medium (2★)</Option>
            <Option value={3}>Moderate (3★)</Option>
            <Option value={4}>Hard (4★)</Option>
            <Option value={5}>Very Hard (5★)</Option>
          </Select>
        </Space>
      </Card>
      
      <Tabs defaultActiveKey="1">
        <TabPane tab="All Questions" key="1">
          <Table 
            columns={columns} 
            dataSource={filteredQuestions} 
            rowKey="id"
            expandable={{
              expandedRowRender: record => (
                <div style={{ margin: 0 }}>
                  <h4>Explanation:</h4>
                  <p>{record.explanation}</p>
                  {record.explanationImages?.map((img, i) => (
                    <img key={i} src={img} alt="Explanation" style={{ maxWidth: '200px', display: 'block', marginTop: '10px' }} />
                  ))}
                  <Divider />
                  <p>
                    <strong>Marks:</strong> 
                    {record.isCorrect ? ` +${record.correctMarks}` : 
                     record.isIncorrect ? ` ${record.incorrectMarks}` : ' 0'}
                  </p>
                </div>
              ),
              rowExpandable: record => !!record.explanation || !!record.explanationImages?.length
            }}
          />
        </TabPane>
        <TabPane tab="Subject-wise Analysis" key="2">
          {/* You can implement subject-wise charts here */}
          <div>Subject-wise analysis charts will go here</div>
        </TabPane>
        <TabPane tab="Topic-wise Analysis" key="3">
          {/* You can implement topic-wise charts here */}
          <div>Topic-wise analysis charts will go here</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TestAnalysisDashboard;