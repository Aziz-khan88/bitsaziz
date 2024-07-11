import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ProjectProcess.module.css";
//images
import banImg1 from "/public/images/projectprocess/process.png";

const ProjectProcessLp6 = (props) => {
  return (
    <>
      <section className={`${styles[props.processclass]} ${styles.process1}`}>
        <Container>
          <Row>
            <Col>
              <h3 className="white font30 f-700 center mb-0 mb-sm-1">
                Streamlined Process to Develop Your App
              </h3>
              <h2 className="white newchoose f-700 center">{props.title}</h2>

              <p className='white font16 f-400 center'
                dangerouslySetInnerHTML={{
                  __html: `<p class='white font16 f-400 center'>
                ${props.desc}
              `,
                }}
              />
              <Image src={banImg1} alt="BitsWits" className="img-fluid mt-4 mt-lg-5" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectProcessLp6;
