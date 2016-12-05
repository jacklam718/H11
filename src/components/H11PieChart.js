// @flow

import React from 'react';
import { Pie } from 'react-chartjs-2';

type Param = {
  data: Array,
  labels: Array,
  backgroundColor: Array,
  hoverBackgroundColor: Array,
}

const H11PieChart = ({ data, labels, backgroundColor, hoverBackgroundColor } = Param) => {
  const chartData = {
    labels,
    datasets: [{
      data,
      backgroundColor,
      hoverBackgroundColor,
    }],
  };

  return (
    <div>
      <Pie
        data={chartData}
      />
    </div>
  );
};

export default H11PieChart;
