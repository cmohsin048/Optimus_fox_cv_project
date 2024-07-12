import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, closeNavMenu }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='close-icon'>
        <FontAwesomeIcon className='crossham' icon={faXmark} onClick={closeNavMenu} style={{ color: '#000' }} />
      </div>
      <div className='contact'>
        <h4>CONTACTS</h4>
        <div className='phone'>
          <p>03456507620</p>
          <LocalPhoneIcon />
        </div>
        <div className='email'>
          <p>cmohsin048@gmail.com</p>
          <EmailIcon />
        </div>
        <div className='institute'>
          <p>Institute of space technology Islamabad</p>
          <LocationOnIcon />
        </div>
      </div>
      <div className='link'>
        <h4>LINKS</h4>
        <div className='links'>
          <p><a className='links-name' href="https://github.com/cmohsin048" target='blank'>Go to Github</a></p>
          <p><a href="https://www.linkedin.com/in/mohsin-raza-0a4814224/" target='blank'>Go to LinkedIn</a></p>
        </div>
      </div>
      <div className='Skill'>
        <h4>SKILLS</h4>
        <div className='Skills'>
          <ul className='Skills-list'>
            <li>Javascript</li>
            <li>Python</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Html</li>
            <li>Css</li>
            <li>Mongodb</li>
            <li>Jira(scrum)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
