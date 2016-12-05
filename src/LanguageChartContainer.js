// @flow

import React, { Component } from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import _ from 'lodash';
import randomColor from 'randomcolor';
import H11PieChart from './components/H11PieChart';
import H11SelectField from './components/H11SelectField';

const localeSeedData = require('./seedData/locale.json');

class LanguageChartContainer extends Component {
  constructor(props) {
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      value: 1,
      date: localeSeedData.data.series[0],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.date !== nextState.date;
  }

  onDateChange(event, index, value) {
    this.setState({
      date: value,
    });
  }

  setChartData() {
    const colors = randomColor({
      count: Object.keys(localeSeedData.data.values).length,
      luminosity: 'random',
      hue: 'random',
    });

    const labels = [];
    const data = [];
    const backgroundColor = colors;
    const hoverBackgroundColor = colors;

    _.forEach(localeSeedData.data.values, (locale, localeKey) => {
      labels.push(localeKey);
      data.push(locale[this.state.date]);
    });

    return { data, labels, backgroundColor, hoverBackgroundColor };
  }

  render() {
    const chartData = this.setChartData();
    return (
      <div className="chart-container" style={styles.chartContainer}>
        <Card zDepth={1}>
          <CardTitle
            title="Chart of Language"
          />
          <H11PieChart
            {...chartData}
          />

          <CardActions className="cardActions">
            <H11SelectField
              type="dates"
              value={this.state.date}
              floatingLabelText="Series"
              onChange={this.onDateChange}
              fields={localeSeedData.data.series}
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

export default LanguageChartContainer;
