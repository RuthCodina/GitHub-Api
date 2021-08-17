import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Errors from "./Errors";

export function Search() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [get, setGet] = useState(false);
  const [err, setErr] = useState(null);

  function handleName(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    setGet(false);
  }, [name]);

  async function onSearch(name) {
    try {
      if (name.length < 4)
        return alert("you must type a word of at least four characters");
      if (name === "doublevpartners")
        return alert("we couldn´t search this word");
      else {
        const res = await fetch(
          `https://api.github.com/search/users?q=${name}+in%3Afullname&type=Users`
        );
        const info = await res.json();
        setData(info.items);
        console.log(data);
        setGet(!get);
        if (data === undefined) {
          alert("Profiles with that name, doesn't exits");
        }
      }
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  }

  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-5 col-sm">
        <div className="card card-body">
          <input
            type="text"
            placeholder="write the name to browse"
            className="form-control"
            value={name}
            onChange={handleName}
            autoFocus
          />
          <button
            onClick={(e) => onSearch(name)}
            className="btn btn-primary btn-block my-sm-3"
          >
            Search
          </button>
        </div>
      </div>
      {data === [] ? null : <Pagination name={name} data={data} get={get} />}
      {err && <Errors msg={err} />}
    </div>
  );
}

export default Search;
