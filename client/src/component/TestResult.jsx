import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SideNav from "./templates/SideNav";
import Header from "./templates/Header";
import TestResultHorizontalCard from "./templates/TestResultHorizontalCard";
import ResultQuestionGraph from "./templates/ResultQuestionGraph";
import SubjectPerformance from "./templates/SubjectPerformance";
import LeaderBoard from "./templates/LeaderBoard";
import Performances from "./Performances";
import Evaluate from "./templates/Evaluate";
import UpcomingTest from "./templates/UpcomingTest";
import { getTestAttemptScores, getTestDetails } from "../services/apiService.jsx";

const TestResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testScores, setTestScores] = useState(null);
  const [testDetails, setTestDetails] = useState(null);
  const location = useLocation();
  const { testId, attemptId } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch test scores and details in parallel
        const [scoresResponse, detailsResponse] = await Promise.all([
          getTestAttemptScores(attemptId),
          getTestDetails(testId)
        ]);

        console.log("Scores Response:", scoresResponse);
        console.log("Details Response:", detailsResponse);

        setTestScores(scoresResponse.data);
        setTestDetails(detailsResponse.data);
      } catch (err) {
        console.error("Error fetching results:", err);
        setError("Failed to load test results");
      } finally {
        setLoading(false);
      }
    };

    if (testId && attemptId) {
      fetchResults();
    } else {
      setError("Missing test or attempt information");
    }
  }, [testId, attemptId]);

  if (loading) {
    return <div>Loading results...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header />
          <TestResultHorizontalCard 
            title={testDetails?.name || "Test Result"}
            score={testScores?.performance?.score}
            totalMarks={testScores?.performance?.total_marks}
            timeTaken={testScores?.performance?.total_time_taken_formatted}
            date={testDetails?.date}
          />
          
          <ResultQuestionGraph 
            correct={testScores?.performance?.correct_questions}
            incorrect={testScores?.performance?.incorrect_questions}
            skipped={testScores?.performance?.skipped_questions}
            timeTaken={testScores?.performance?.total_time_taken_seconds}
            avgTime={testScores?.performance?.average_time_per_question_seconds}
          />

          <div className="mt-10 w-full flex flex-col justify-center items-center">
            <div className="flex justify-between w-[75%] gap-10">
              <div className="w-[50%]">
                <LeaderBoard 
                  currentRank={testScores?.leaderboard?.current_rank}
                  topUsers={testScores?.leaderboard?.top_10}
                />
              </div>
              <div className="w-[40%]">
                <Performances 
                  subjectData={testScores?.subject_wise_performance}
                />
              </div>
            </div>
          </div>

          <Evaluate 
            testDetails={testDetails}
            performance={testScores?.performance}
          />
          <UpcomingTest />
        </div>
      </div>
    </>
  );
};

export default TestResult;