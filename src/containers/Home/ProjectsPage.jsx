import { ProjectsGroup } from "components/Projects/project";
import { Row } from "react-bootstrap";
import { ProjectsHead } from "components/Projects/project";
import './about.css';


const ProjectsPage = () => {
    return ( 
        <Row className='projects section' id="projects">           <ProjectsHead />

        <ProjectsGroup />

      </Row>
     );
}
 
export default ProjectsPage;