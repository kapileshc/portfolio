import React from 'react';
import { Button } from 'react-bootstrap';
import {  Link } from 'react-scroll';
import ReactTyped from 'react-typed';
import './TopContent.css'

const TopContent = () => {
  return <div className='topcontent'>
      <div className='topcontent_container'>
          <h1>Mr.C.<span className='startLetter'>K</span>apilesh</h1>
          <ReactTyped
            strings={['web developer']}
            typeSpeed={40}
          />
          <br></br>
          <a href='www.google.com'>
              <Button variant='outline-secondary'>Download CV </Button>
          </a>
          {' '}
          <Link to="projects" smooth={true} duration={500}>
              <Button variant='outline-secondary'>My work</Button>
          </Link>
      </div>

  </div>;
};

export default TopContent
;
