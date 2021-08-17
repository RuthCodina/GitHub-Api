import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Charts } from "./Charts";

function renderData(info) {
  return (
      <div className="row justify-content-md-center">
        {info &&
          info.map((el) => (
            <div
              className="card border-primary mb-3 my-sm-3 mx-sm-3 text-center "
              style={{ maxWidth: "20rem" }}
              key={el.id}
            >
              <h3 className="card-header">
                <Link to={`/${el.login}`} style={{ textDecoration: "none" }}>
                  {el.login}
                </Link>
              </h3>
              <h4> id is {el.id}</h4>
            </div>
          ))}
      </div>
  );
}

export function Pagination({ name, data, get }) {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let profilesPerPage = 10;

  
  const [pageNumberLimit, setPageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(profiles && profiles.length / profilesPerPage);
    i++
    ) {
      pages.push(i);
    }
    
    let indexOfLastProfile = currentPage * profilesPerPage;
    let indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    let currentProfiles =
    profiles && profiles.slice(indexOfFirstProfile, indexOfLastProfile);

    function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  }
  
  let renderPageNumber = pages.map((num) => {
    if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
      return (
        <li
        key={num}
          id={num}
          onClick={handleClick}
          className={currentPage === num ? "page-item active page-link" : "page-item page-link"}
        >
            {num}
        </li>
      );
    } else {
      return null;
    }
  });
  
  function handlePrevBtn() {
    if (currentPage <= 1) {
      setPageNumberLimit(maxPageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit);
    } else {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }
  
  function handleNextBtn() {
    if (currentPage === 3) {
      setPageNumberLimit(maxPageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit);
    } else {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  }
  
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${name}+in%3Afullname&type=Users`)
      .then((res) => res.json())
      .then((json) => setProfiles(json.items));
  }, [name]);


  return (
    <div>
      <ul className="pagination justify-content-center my-sm-3">
        <li className={currentPage > 1 ? "page-item" : "page-item disabled"}>
          <button className="page-link" onClick={handlePrevBtn}>
            «
          </button>
        </li>

        {data === [] ? null: renderPageNumber}

        <li className="page-item">
          <button className="page-link" onClick={handleNextBtn}>
            »
          </button>
        </li>
      </ul>
      {get ? renderData(currentProfiles) : null}
      <Charts info = {currentProfiles}/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Pagination;
