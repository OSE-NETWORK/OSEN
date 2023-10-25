import { Project_btn } from '../Landing/index.jsx';
import './project.scss';

function ProjectsHead() {
    return <h1 className="phead">Projects</h1>;
  }
  function ProjectDomain(props){
    return (
        <p className='ProjectDomain'>{props.domain}</p>
    )
  }
  function DomainMapper(props){
    return (
        <div className='DomainBox'>
            {
                props.domainList.map((detail,index)=>{
                   return( <ProjectDomain domain={detail}/>)
                })
            }
        </div>
    )
  }
  function Project(props) {
    return (
      <div className="Project ">
        <h3>{props.projectName}</h3>
        <p>By {props.owner}</p>
        <DomainMapper domainList={props.domainList}/>
        <Project_btn class="project_btn" type="Project Details" overlay="Go to Project" src={props.src}/>
      </div>
    );
  }

  export {ProjectsHead, Project};
