import React from 'react';
import "./PieChartApp.css";
import PieCharted from './PieCharted';
import Header from '../../Header/Header';

function PieChartApp() {
  return (
    <section>
      <Header header="Pie Chart"/>
      <PieCharted />
    </section>
  )
}

export default PieChartApp;