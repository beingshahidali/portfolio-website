import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import Technologies from "./Technologies"

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
    </>
  );
};

export default About;
