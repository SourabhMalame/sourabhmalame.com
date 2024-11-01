import React from "react";
import myimg from "../assets/sourabhmalame1.jpg";
import Products from "./Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correctly import the LinkedIn icon
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const Homepage = () => {
  return (
    <>
      <div className="main-homepage">
        <div className="myinfo-homepage">
          <div className="img-div">
            <img src={myimg} alt="Sourabh Malame" />
          </div>
          <div className="basic-info"></div>
          <h1>Sourabh Malame</h1>

          <div
            className="stack-myinfo"
            style={{ display: "flex", alignItems: "center", margin: "20px" }}
          >
            <FontAwesomeIcon
              icon={faHtml5}
              title="HTML"
              style={{ marginRight: "10px", color: "#E34F26" }}
              size="2xl"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              title="CSS"
              style={{ marginRight: "10px", color: "#1572B6" }}
              size="2xl"
            />
            <FontAwesomeIcon
              icon={faJsSquare}
              title="JavaScript"
              style={{ marginRight: "10px", color: "#F7DF1E" }}
              size="2xl"
            />
            <FontAwesomeIcon
              icon={faReact}
              title="React"
              style={{ marginRight: "10px", color: "#61DBFB" }}
              size="2xl"
            />
            <FontAwesomeIcon
              icon={faBootstrap}
              title="Bootstrap"
              style={{ marginRight: "10px", color: "#563D7C" }}
              size="2xl"
            />
            <FontAwesomeIcon
              icon={faNode}
              title="Node.js"
              style={{ marginRight: "10px", color: "#68A063" }}
              size="2xl"
            />
          </div>

          <p>Web Developer And Black Hat SEO Expert</p>
          <div className="btn-div">
            <button>Download Resume</button>
          </div>
          <div className="myinfo-social">
            <div>
              <p>Connect with me on LinkedIn!</p>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }} // Add some space between icons
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-homepage">
          <div className="glass-card">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
