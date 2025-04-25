import React from 'react';
import LineCharted from './LineCharted';
import Header from '../../Header/Header';
import "./LineChart.css";

function LineChartApp() {
  return (
    <section>
    <Header header="Line Chart"/>
    <LineCharted />
  </section>
  )
}

export default LineChartApp;