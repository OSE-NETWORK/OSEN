import { SOCIALS, TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const Project_btn = props =>{
  return (
     <a href={props.src} target='__blank'>
    <button className={props.class}>
     {props.type}
      <div className="overlay-p">
        <div className="overlay-text-p">{props.overlay}</div>
      </div>
    </button>
     </a>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join Us"
            overlay="Click the link"
          />
        </a>
      </div>
      <div className="buttom-group">
        <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn class="sponsor_btn" type="Code of Conduct" overlay="Fill the form" />
        </a>

        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="Hackers registration"
          />
        </a>
      </div>
    </div>
  );
};

export { Btn, Myinfo ,Project_btn};

