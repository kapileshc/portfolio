import React from 'react';
import ReactTyped from 'react-typed';
import './skillContainer.css'


function Skillcontainer() {
  return (

  <div className='skills'>
      <h1 className='display-1 topic'>Skillset</h1>
        <div className='skills_header'>
            <div className='skills_sub'>
                
                <strong>LANGUAGES</strong>
                {['HTML5','CSS3','Node.js','Javascript'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
                
            </div>
            <div className='skills_sub'>
                <strong>LIBRARIES</strong>
                {['React.js','Express.js','Bootstrap','Material-ui'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
            </div>
            <div className='skills_sub'>
                <strong>TOOL</strong>
                {['Chrome Dev','Git & GitHub'].map(lan => <li><ReactTyped
            strings={[lan]}
            typeSpeed={40}
          /></li>)}
            </div>
        </div>
  </div>)
 
}

export default Skillcontainer;
