import React from 'react';
import ReactTyped from 'react-typed';
import './skillContainer.css'


function Skillcontainer() {
  return (

  <div className='skills'>
      <h1 className='display-1 topic'>Skills</h1>
        <div className='skills_header'>
            <div className='skills_sub'>
                
                <strong>Languages</strong>
                {['HTML5','CSS3','Node.js','Javascript'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
                
            </div>
            <div className='skills_sub'>
                <strong>Libraries</strong>
                {['React.js','Express.js','Bootstrap','Material-ui'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
            </div>
            <div className='skills_sub'>
                <strong>Tool:</strong>
                {['Chrome Dev','Git & GitHub'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
            </div>
        </div>
  </div>)
 
}

export default Skillcontainer;
