import React from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  maxValue: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, maxValue }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        Bar Chart
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Label */}
            <span className="w-24 text-sm font-medium text-gray-700">{item.label}</span>
            {/* Bar */}
            <div className="flex-1 bg-gray-200 rounded-lg h-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  transition: "width 0.4s ease",
                }}
              ></div>
            </div>
            {/* Value */}
            <span className="w-16 text-sm font-bold text-gray-800 text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
