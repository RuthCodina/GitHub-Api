import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ProfileDetails() {
  const [data, setData] = useState([]);

  const { login } = useParams();

  async function getProfileByUsername(login) {
    const res = await fetch(`https://api.github.com/users/${login}`);
    const info = await res.json();
    setData(info);
    console.log(data);
  }

  useEffect(() => {
    getProfileByUsername(login);
  }, [login]);

  return (
    <div className="card mx-auto" style={{ maxWidth: "50rem" }}>
      {data && (
        <div className="card-body">
          <h1 className="card-title text-center">{data.login}</h1>
          <img
            className="card-img-top img-fluid"
            src={data.avatar_url}
            alt="Card image cap"
          />
          <h2 className="card-text text-info text-center">
            Check his/her job in
          </h2>
          <h2 className="text-center">
            <Link
              to={{ pathname: `${data.html_url}` }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {data.html_url}
            </Link>
          </h2>
          <h3 className="text-center">
            Github location is {data.location ? data.location : "Undefined"}
          </h3>
          <h3 className="text-center">
            His/Her stack is {data.bio ? data.bio : "Undefined"}
          </h3>
          <h3 className="text-center">
            Created his/her Github account in{" "}
            {data.created_at && data.created_at.slice(0, 10)}
          </h3>
          <h3 className="text-center">Has {data.followers} followers</h3>
        </div>
      )}
    </div>
  );
}

export default ProfileDetails;
