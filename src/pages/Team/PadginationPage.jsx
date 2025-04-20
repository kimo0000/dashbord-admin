import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PadginationPage.css";

function PadginationPage({ currentPage, totalPage, NextPage, prevPage }) {
  return (
    <>
      <FaChevronLeft onClick={prevPage} />
      <span>
        {currentPage} - {totalPage}
      </span>
      <FaChevronRight onClick={NextPage} />
    </>
  );
}

export default PadginationPage;
