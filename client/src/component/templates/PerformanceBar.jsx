import React from 'react';
import PropTypes from 'prop-types';

const PerformanceBar = ({ subject, score, total }) => {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  
  const getBarColor = () => {
    if (percentage === 0) return '#ccc';
    if (percentage < 50) return '#e74c3c';
    if (percentage < 75) return '#f39c12';
    return '#2ecc71';
  };

  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: getBarColor(),
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 text-gray-700">
        <span className="font-medium">{subject}</span>
        <span className="font-semibold">
          {score}/{total} ({Math.round(percentage)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div style={barStyle} className="h-5 rounded-full transition-all duration-300"></div>
      </div>
    </div>
  );
};

PerformanceBar.propTypes = {
  subject: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default PerformanceBar;