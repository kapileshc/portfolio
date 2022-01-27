import React from 'react';
import{Element} from 'react-scroll'
import Contact from '../contact/Contact';
import SkillContainer from '../skill/SkillContainer';
import TopContent from '../topcontent/TopContent';
import './TopContainer.css'

function TopContainer() {
  return( 
    <div>
  <Element name='about' className='topcontainer'>

      <TopContent/>

  </Element>
  <Element name='skills'>
    <SkillContainer/>
  </Element>
  <Element name='contact'>
    <Contact/>
  </Element>
  </div>

  );
}

export default TopContainer;
