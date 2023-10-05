import React from 'react'
import './Heading.css'

const Heading = () => {
    return (
        <div>
        <div className='hero'>
            <div className='content'>

         {/* main Title of NTWIST website  */}
              <h1 className='titlestyle'>Data-powered solutions</h1>
              <h1 className='titlestyle'> for Industrial Excellence</h1>

            {/* Button for read more  */}  
          <button className='button1'>Read more</button>  
          </div>   
            
        </div>
        </div>
    )
}

export default Heading ;