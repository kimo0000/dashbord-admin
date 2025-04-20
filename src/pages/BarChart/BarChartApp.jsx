import React from 'react';
import "./BarChartApp.css";

import BarChar from "./BarChar";
import Header from '../../Header/Header';



function BarChartApp() {

  return (
    <section className='bar_chart'>
      <Header header="Bar Chart"/>
      <BarChar />
    </section>
  )
}

export default BarChartApp;
