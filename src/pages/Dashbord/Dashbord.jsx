import React from "react";
import "./Dashbord.css";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Button } from "@mui/material";

import { FaDownload } from "react-icons/fa";
import Header from "../../Header/Header";

function Dashbord() {
  return (
    <section className="dashbord">
      <Header header="Dashbord" />
      <div className="btn_download">
        <Button variant="contained">
          <FaDownload />
          Download Report
        </Button>
      </div>
      <article className="dashbord_contain">
        <Row1 />
        <Row2 />
        <Row3 />
      </article>
    </section>
  );
}

export default Dashbord;
