import React from 'react';
import "./Row3.css";

import PieCharted from '../PieChart/PieCharted';
import BarChar from '../BarChart/BarChar';

function Row3() {
  return (
    <article className='Row_three'>
      <div className="pie">
        <PieCharted isDashbord={true} />
      </div>
      <div className="bar">
        <BarChar isDashbord={true} />
      </div>
    </article>
  )
}

export default Row3;