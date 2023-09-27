import { Container, Row, Col } from "react-bootstrap";
import CircularProgressBar from "./ProgressBar";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container className="skill-bx">
        <Row>
          <Col>
            <div>
              <h2>Skills</h2>
              <p> The current skills set - keep learning </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={5}>
            <div className="item">
              <CircularProgressBar
                radius={200}
                strokeWidth={40}
                progress={100}
              />
              <h5>Passion for learning</h5>
            </div>
          </Col>
          <Col xl={5}>
            <div className="item">
              <CircularProgressBar
                radius={200}
                strokeWidth={40}
                progress={70}
              />
              <h5>HTML & CSS</h5>
            </div>
          </Col>
          <Col xl={5}>
            <div className="item">
              <CircularProgressBar
                radius={200}
                strokeWidth={40}
                progress={70}
              />
              <h5>React developemnt</h5>
            </div>
          </Col>
          <Col xl={5}>
            <div className="item">
              <CircularProgressBar
                radius={200}
                strokeWidth={40}
                progress={70}
              />
              <h5>AWS</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
}
