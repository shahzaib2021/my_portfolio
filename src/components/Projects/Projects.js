import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Currency Note Detector App"
              description="Implemented a machine learning for authenticating Pakistani currency notes using 
              CNN machine learning Model. Developed a robust model capable of distinguishing between genuine and counterfeit currency notes with high 
              accuracy.Utilized a dataset of Pakistani currency images to train the model and integrated advanced image processing 
              techniques for feature extraction"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="I have meticulously crafted my personal portfolio page using Next.js and Tailwind CSS with the primary goal of providing an insightful and comprehensive platform for my potential clients. Through this portfolio, I aim to offer a deeper understanding of my professional journey, showcasing my wealth of experience, accomplishments, and skills. It serves as an invaluable resource for anyone seeking to gain insights into my background and expertise."
               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Signature Forgery Detection Web App"
              description="I have meticulously designed and developed a web application, harnessing the formidable capabilities of a Convolutional Neural Network (CNN) machine-learning model, to achieve the precise detection of signatures. Within this project, I meticulously crafted a robust CNN architecture, which underwent rigorous training on a diverse and extensive dataset of signatures, ultimately empowering it with the remarkable ability to accurately identify and distinguish between Real and forgery Signatures." 
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI Based Property Recommendation System"
              description="An AI-based Property Recommendation System is a cutting-edge solution that harnesses the power of artificial intelligence and machine learning to revolutionize the way individuals search for real estate properties. This innovative system utilizes advanced algorithms to analyze vast sets of data, including user preferences, property details, location information, and market trends. By doing so, it provides users with highly tailored property recommendations that match their specific criteria, such as budget, location, property type, and amenities."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WordPress Ecommerce Website"
              description="SaltRockInternational.com is an impressive WordPress-based eCommerce website meticulously crafted by me to cater to the unique needs of my client. This dynamic online platform showcases a wide range of exquisite salt rock products and accessories, providing customers with a seamless shopping experience. With its user-friendly interface and robust eCommerce functionality, visitors can easily browse, select, and purchase their desired salt rock items."
               ghLink="#"
            demoLink="https://saltrockinternational.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AI Based 3D & 2D House Map Generation System"
              description="I build a web-based map generation system powered by AI and machine learning, enabling non-experts to get a
              accurate 3D maps for their homes and offices.
              • Developed an intuitive user interface for inputting plot details, producing multiple 3D map options through AI 
              algorithms.
              • Implemented interactive map exploration features, including rotation and zoom, and provided downloadable 2D 
              map formats for practical use.
              • Contributed to simplifying architectural design for a broader audience while showcasing expertise in AI, machine 
              learning, and user-focused development"
               ghLink="#"
              demoLink="#"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
