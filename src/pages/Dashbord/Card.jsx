import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";

function Card({ icon, title, subTitle, data, percent, color }) {
  return (
    <div className="card">
      <div className="card_left">
        {icon}
        <div>{title}</div>
        <div>{subTitle}</div>
      </div>
      <div className="card_right">
        <div
          className="chart"
        >
          <PieChart
            colors={color}
            series={[
              {
                data: data,
              },
            ]}
            height={70}
            width={70}
          />
        </div>
        <p>{percent}</p>
      </div>
    </div>
  );
}

export default Card;
