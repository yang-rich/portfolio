import React from 'react';
import '../styles/contact.css';
import GitHub from '../images/github.png';
import LinkedIn from '../images/linkedIn.png';
import PDF from '../images/pdf.png';

const Contact = () => {
  return (
    <>
      <div className='contactContainer'>
        <div className='title' id='contacts'>
          Let's Talk
        </div>
        <div className='profLinks'>
          <div className='icons'>
            <a href='https://github.com/yang-rich?tab=repositories'>
              <img src={GitHub} className='gitHub' alt='gitHub'></img>
            </a>
          </div>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/yang-rich/'>
              <img src={LinkedIn} className='linkedIn' alt='LinkedIn'></img>
            </a>
          </div>
          <div className='icons'>
            <a href='https://drive.google.com/file/d/1crduz1DDVu6dK45qXYw_wotYEUgYRBRW/view?usp=sharing'>
              <img src={PDF} className='pdf' alt='Resume'></img>
            </a>
          </div>
        </div>
        <div className='contactMe'>Contact me:</div>
        <br />
        <div className='email'>
          <a href='mailto: yangrich91@gmail.com'>yangrich91@gmail.com</a>
        </div>
        <br />
      </div>
    </>
  );
};

export default Contact;
