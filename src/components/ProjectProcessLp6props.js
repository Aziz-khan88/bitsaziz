import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ProjectProcess.module.css";


const ProjectProcessLp6props = (props) => {
  return (
    <>
      <section className={`${styles[props.processclass]} ${styles.process1}`}>
        <Container>
          <Row>
            <Col>
              <h3 className="white font30 f-700 center mb-0 mb-sm-1">
                {props.subtitle}
              </h3>
              <h2 className="white newchoose f-700 center">{props.title}</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: `<p class='white font16 f-400 center'>
                ${props.desc}
              </p>`,
                }}
              />
              {props.img5}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectProcessLp6props;
