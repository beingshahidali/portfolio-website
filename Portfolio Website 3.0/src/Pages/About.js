import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";

const About = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub user data
    fetch("https://api.github.com/users/g3vind")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Technologies />
      <div className="github-container github">
        <Row>
          <Col md={6} className="user-info">
            <h1 className="project-heading">
              Days I <strong className="yellow">Code</strong>
            </h1>
            {loading ? (
              <p>Loading GitHub data...</p>
            ) : (
              <div>
                <div className="avatar-container">
                  <img
                    src={userData.avatar_url}
                    alt="GitHub Avatar"
                    className="avatar"
                  />
                </div>
                <h2 className="username">{userData.name}</h2>
                <p className="username">Username: {userData.login}</p>
                <p className="followers">Followers: {userData.followers}</p>
              </div>
            )}
          </Col>
          <Col md={6} className="github-calendar">
            <GitHubCalendar
              username="g3vind"
              blockSize={15}
              blockMargin={5}
              color="#6102ce"
              fontSize={16}
            />
          </Col>
        </Row>
      </div>

      <div className="extra">
        <div className="content-container">
          <img
            src="https://camo.githubusercontent.com/be1220359543723cfe92837c562b919ee3c8f10ce4892a2aa80d279717231c12/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d673376696e6426"
            alt="Styled Image"
          />
        </div>

        <div className="most-used-lang">
          
          <img
            src="https://camo.githubusercontent.com/d6967502736f4903302bb0e57de28a35f7c1fbe8504e518f3ccaaef1b3788171/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d673376696e642673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt="Most Used Language"
          />
        </div>
      </div>

      <style jsx>{`
        .github-container {
          display: flex;
          justify-content: center;

        }

        .content-container {
          flex: 1;
          margin: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .most-used-lang {

          flex: 1;
          margin: 20px;
          height:300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Add your additional styles here */

      `}</style>
    </>
  );
};

export default About;


