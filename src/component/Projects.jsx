import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg from "../assets/img/project-img.png";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "The first project",
      imgUrl: projImg,
    },
    {
      title: "Project 2",
      description: "The second project",
      imgUrl: projImg,
    },
    {
      title: "Project 3",
      description: "The third project",
      imgUrl: projImg,
    },
    {
      title: "Project 4",
      description: "The forth project",
      imgUrl: projImg,
    },
    {
      title: "Project 5",
      description: "The fifth project",
      imgUrl: projImg,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Project</h2>
            <p>Future projects display area</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Area 2</Tab.Pane>
                <Tab.Pane eventKey="third">Area 3</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
