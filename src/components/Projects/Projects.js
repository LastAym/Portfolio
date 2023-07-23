import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/E-com.png'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Taskify.png'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/easy-code.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="Used for increase the productivity and tracks your progress towards the your project or goal. It has a workspace features that means multiple people collobrate in one project. It has a features like create boards , add container in board and add task in container. Board member also add comment in perticular task and assign flag over that. "
              link="https://github.com/MohitSojitra/taskify"
              liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
