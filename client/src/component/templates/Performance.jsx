import React from 'react';
import PerformanceBar from './PerformanceBar';

const Performance = ({ data = [] }) => {
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const totalPossible = data.reduce((sum, item) => sum + item.total, 0);
  const overallPercentage = totalPossible > 0 ? (totalScore / totalPossible) * 100 : 0;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Subject-wise Performance
      </h2>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Overall Performance:</span>
          <span className="font-bold text-blue-700">
            {totalScore}/{totalPossible} ({Math.round(overallPercentage)}%)
          </span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto pr-2">
        {data.map((item, index) => (
          <PerformanceBar 
            key={`${item.subject}-${index}`}
            subject={item.subject}
            score={item.score}
            total={item.total}
          />
        ))}
      </div>
    </div>
  );
};

Performance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

Performance.defaultProps = {
  data: [],
};

export default Performance;