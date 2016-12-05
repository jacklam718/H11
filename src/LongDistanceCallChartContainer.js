// @flow

import React, { Component } from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import _ from 'lodash';
import randomColor from 'randomcolor';
import H11BarChart from './components/H11BarChart';
import H11SelectField from './components/H11SelectField';
import Util from './apis/Util';

const callsSeedData = require('./seedData/calls.json');

class LongDistanceCallChartContainer extends Component {
  constructor(props) {
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      value: 1,
      date: callsSeedData.data.series[0],
    };
  }

  onDateChange(event, index, value) {
    this.setState({ date: value });
  }

  setChartData() {
    const color = randomColor({
      luminosity: 'light',
      hue: 'blue',
    });

    const labels = [];
    const data = [];
    const backgroundColor = color;
    const hoverBackgroundColor = color;

    _.forEach(callsSeedData.data.values, (calls, phoneNumber) => {
      const countryName = Util.getCountryByPhoneNumber(phoneNumber);
      if (!labels.includes(countryName)) {
        labels.push(countryName);
        data.push(calls[this.state.date]);
      }
    });
    return { data, labels, backgroundColor, hoverBackgroundColor };
  }

  render() {
    const chartData = this.setChartData();
    return (
      <div className="chart-container" style={styles.chartContainer}>
        <Card zDepth={1}>
          <CardTitle
            title="Long Distance Calls"
          />

          <H11BarChart
            {...chartData}
          />

          <CardActions className="cardActions">
            <H11SelectField
              type="dates"
              value={this.state.date}
              floatingLabelText="Series"
              onChange={this.onDateChange}
              fields={callsSeedData.data.series}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const styles = {
  chartContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
};

export default LongDistanceCallChartContainer;
