// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LanguageChartContainer from './LanguageChartContainer';
import LongDistanceCallChartContainer from './LongDistanceCallChartContainer';

injectTapEventPlugin();

function App() {
  return (
    <MuiThemeProvider >
      <div>
        <AppBar
          title="Hady Travel"
          showMenuIconButton={false}
        />
        <LanguageChartContainer />
        <LongDistanceCallChartContainer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
