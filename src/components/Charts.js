import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Errors from "./Errors";

export function Charts({ info }) {
  const [render, setRender] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [err, setErr] = useState(null);

  let infoLogin = [];

  for (let i = 0; i < (info && info.length); i++) {
    infoLogin.push(info[i].login);
  }

  useEffect(() => {
    const getFollowers = async function () {
      try {
        let data = [];
        for (let i = 0; i < infoLogin.length; i++) {
          const res = await fetch(
            `https://api.github.com/users/${infoLogin[i]}`
          );
          const info = await res.json();
          data.push(info.followers);
        }
        setFollowers(data);
      } catch (err) {
        console.log(err);
        setErr(err);
      }
    };

    getFollowers();
  }, [info]);

  function handleClick(e) {
    e.preventDefault();
    setRender(!render);
    console.log(followers);
    console.table(infoLogin);
  }

  return (
    <>
      <button
        className="btn btn-outline-primary justify-content-md-80"
        onClick={handleClick}
      >
        Click Here to see these Profiles followers Graph
      </button>
      {err && <Errors msg={err} />}
      {render ? (
        <Bar
          data={{
            labels: infoLogin,
            datasets: [
              {
                label: "followers",
                data: followers,
                backgroundColor: [
                  "rgba(204, 0, 0, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(253, 216, 53, 0.5)",
                  "rgba(46, 125, 50, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                  "rgba(88, 24, 69, 0.5)",
                  "rgba(22, 160, 133, 0.5)",
                  "rgba(255, 0, 102, 0.5)",
                  "rgba(255, 112, 67, 0.5)",
                ],
              },
            ],
          }}
          height={400}
          width={600}
        />
      ) : null}
    </>
  );
}
