import React, { useState } from "react";
import "./Team.css";
import { dataPerson } from "../../data/Data";
import { FaArrowDown } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import PadginationPage from "./PadginationPage";
import Header from "../../Header/Header";

function Team() {
  // Searching By Age:
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState("");

  // Paggination:
  const postPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * postPerPage; // 1*3 =3
  const firstIndex = lastIndex - postPerPage; // 3-3= 0
  const totalPage = Math.ceil(dataPerson.length / postPerPage);

  const NextPage = () => {
    if (currentPage >= 0 && currentPage < totalPage)
      setCurrentPage(currentPage + 1);
    if (currentPage === totalPage) setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage <= totalPage && currentPage > 0)
      setCurrentPage(currentPage - 1);
    if (currentPage <= 1) setCurrentPage(1);
  };

  const filtredByAge = () => {
    setShowInput(!showInput);
    if (!showInput) setInputVal("");
  };

  return (
    <section className="team">
      <Header header="Manage Team" />
      <table className="table_team">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="person_age">
              Age
              {showInput ? (
                <FaArrowUp
                  className="person_arrow"
                  fontSize="0"
                  onClick={filtredByAge}
                />
              ) : (
                <FaArrowDown
                  className="person_arrow"
                  fontSize="0"
                  onClick={filtredByAge}
                />
              )}
              {showInput && (
                <input
                  type="number"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  style={{
                    width: "60px",
                    padding: "6px",
                    border: "1px solid #ddd",
                    transition: "2s",
                  }}
                />
              )}
            </th>
            <th>Phone</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {dataPerson &&
            dataPerson
              .filter((person) =>
                inputVal ? person.age >= Number(inputVal) : person
              )
              .slice(firstIndex, lastIndex)
              .map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.age}</td>
                    <td>{person.phone}</td>
                    <td>
                      <button
                        style={{
                          width: "90px",
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          margin: "auto",
                          backgroundColor:
                            person.access === "User"
                              ? "green"
                              : person.access === "Manager"
                              ? "#f50"
                              : "blueviolet",
                        }}
                      >
                        {person.access === "User" ? (
                          <FaLock size="15px" />
                        ) : person.access === "Manager" ? (
                          <FcManager size="15px" />
                        ) : (
                          <MdAdminPanelSettings size="15px" />
                        )}
                        {person.access}
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <article
        className="padgination"
        style={{ textAlign: "right", padding: "0 15px 0", margin: "0 10px" }}
      >
        {
          <PadginationPage
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            NextPage={NextPage}
            prevPage={prevPage}
          />
        }
      </article>
    </section>
  );
}

export default Team;
