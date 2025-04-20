import React from "react";
import "./Row2.css";

import LineCharted from "../LineChart/LineCharted";
import { Button } from "@mui/material";

import { IoDownloadOutline } from "react-icons/io5";

const transactionArr = [
  { codeId: "1e4dwf", name: "john doe", date: "01-04-2025", sales: 55 },
  { codeId: "01e4dswf", name: "john doe", date: "01-04-2025", sales: 32 },
  { codeId: "1e4aewf", name: "john doe", date: "01-04-2025", sales: 12.5 },
  { codeId: "01eaewf", name: "john doe", date: "01-04-2025", sales: 13 },
  { codeId: "01dsawf", name: "john doe", date: "01-04-2025", sales: 14.1 },
  { codeId: "01edsawf", name: "john doe", date: "01-04-2025", sales: 35 },
  { codeId: "01e4dsae", name: "john doe", date: "01-04-2025", sales: 43.99 },
  { codeId: "01esaewf", name: "john doe", date: "01-04-2025", sales: 5.91 },
  { codeId: "01e4dsaewf", name: "john doe", date: "01-04-2025", sales: 11.32 },
  { codeId: "01e4aewf", name: "john doe", date: "01-04-2025", sales: 31.91 },
  { codeId: "01e4dsewf", name: "john doe", date: "01-04-2025", sales: 90.91 },
];

function Row2() {
  return (
    <div className="Row_two">
      <div className="line_chart">
        <IoDownloadOutline
          className="down_btn"
          size={25}
          style={{ position: "absolute", right: "25px" }}
        />
        <LineCharted />
      </div>
      <div className="recent_transaction">
        <h3 style={{ color: "blueviolet" }}>Recent Transaction</h3>
        <ul className="transactions">
          {
            transactionArr.map(({codeId, name, date, sales}) => {
              return (
                <li className="transaction" key={codeId}>
                  <p>
                    {codeId}
                    <br />
                    <span>{name}</span>
                  </p>
                  <p>{date}</p>
                  <Button variant="contained" color="error">
                    ${sales}
                  </Button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Row2;
