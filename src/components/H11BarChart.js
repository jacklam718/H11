// @flow

import React from 'react';
import { Bar } from 'react-chartjs-2';

type Param = {
  data: any,
  width: number,
  height: number,
  options: Object,
  labels: Array,
  backgroundColor: Object,
  hoverBackgroundColor: Object,
}

const H11BarChart = ({ data, labels, width, height, options, backgroundColor, hoverBackgroundColor } = Param) => {
  const chartData = {
    labels,
    datasets: [{
      label: 'My First dataset',
      data,
      backgroundColor,
      hoverBackgroundColor,
    }],
  };
  return (
    <Bar
      data={chartData}
      width={width}
      height={height}
      options={options}
    />
  );
};

H11BarChart.defaultProps = {
  width: 100,
  height: 50,
  options: {
    maintainAspectRatio: true,
  },
};

export default H11BarChart;
