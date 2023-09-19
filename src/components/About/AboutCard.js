import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { workExp, extraCurricular, educations } from "./Data.js"; // Replace with the correct path to your data file

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Shahzaib Malik </span>
            from <span className="purple">Sialkot, Pakistan.</span>
            <br /> I am a Software Engineer. I graduated in Aug-2023 in Bachelor of Science in Software Engineering.
            <br />
             I completed my degree with <span className="purple">81.59%.</span>
            <br />
            I got <span className="purple">3.36</span> CGPA out of 4.0.
            <br />
            Additionally, I am currently employed as a Web Developer at GAOTek.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahzaib</footer>

          {/* Display Work Experience */}
          <div className="my-2">
            <h5 className="purple">Work Experience</h5>
            {workExp.map((exp, index) => (
              <div key={index}>
                <h6>{exp.company}</h6>
                {exp.positions.map((position, posIndex) => (
                  <p key={posIndex} style={{ marginBottom: "0.5rem" }}>
                    <strong>{position.title}</strong> |{" "}
                    {position.startDate.toLocaleDateString()} -{" "}
                    {position.endDate === "present"
                      ? "Present"
                      : position.endDate.toLocaleDateString()}
                  </p>
                ))}
                <ul>
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>
                      <ImPointRight /> {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Display Education */}
          <div className="my-2">
            <h5 className="purple">Education</h5>
            {educations.map((education, index) => (
              <div key={index}>
                <h6>{education.degree}</h6>
                <p style={{ marginBottom: "0.5rem" }}>
                  {education.school} |{" "}
                  {education.startDate.toLocaleDateString()} -{" "}
                  {education.endDate.toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
