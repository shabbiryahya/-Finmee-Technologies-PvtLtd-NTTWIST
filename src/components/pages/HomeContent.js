import React from 'react'
import img2 from './mine.jpg';  
import img3 from './mineral.jpg';
import img4 from './oil.jpg';
import img5 from './sustain.jpg';
import './HomeContent.css'

function HomeContent() {
  return (
    <div className='align '  >


{/* 1 st grid start */}
 {/* Grid is ued to keep image and deatils side by side */}
<div class="container  " > 

 
  {/* below fade-up is used From aos external CDN link that we have used in index.html */}
  <div class="row " data-aos="fade-up"> 
    <div class="col">
   
    {/* deatils / text */}
  <h1 className='textcolor'>Mine-to-Mill-to-Mine </h1>
  <p className='contentfont'>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</p>
  <button className='button2'>Read more</button> 
    </div>
    {/* image */}
    <div class="col">
    <div className='imgfit ' >
    <div data-aos="fade-up"><img src={img2} class="img-fluid" alt=""></img></div>
    </div>

    </div>
  </div>
  </div>

  {/* ---------------1 st grid end -------------------------------------------*/}



{/* -----------------2 st grid start---------------------------------------------- */}


  <div class="container  align " >
  <div class="row" data-aos="fade-up">
    
    <div class="col">

    <div className='imgfit ' >
    <div data-aos="fade-up"><img src={img5} class="img-fluid" alt=""></img></div>
    </div>

 
    </div>

    <div class="col">
    <h1 className='textcolor'>Sustainability </h1>
  <p className='contentfont'>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.With the increasing relevance of carbon accounting and emissions tracking,  performance and help processing plants track, manage, optimize, and report key metrics.</p>
  <button className='button2'>Read more</button> 
    </div>

  </div>
  </div>

{/*----------------------- 2 st grid end--------------------------------------------- */}





{/* -------------------------3 st grid start------------------------------------ */}

  <div class="container  align " >
  <div class="row" data-aos="fade-up">
    <div class="col">
   
  <h1 className='textcolor'>Mineral Processing </h1>
  <p className='contentfont'>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
  <button className='button2'>Read more</button> 

    </div>

    <div class="col">

    <div className='imgfit ' >
    <div data-aos="fade-up"><img src={img3} class="img-fluid" alt=""></img></div>
    </div>

    </div>
  </div>
  </div>

  {/* ------------------------------3 st grid end ------------------------------*/}



{/*--------------------------------- 4 st grid start-------------------------------------------- */}

  <div class="container  align " >
  <div class="row" data-aos="fade-up">
    
    <div class="col">

    <div className='imgfit ' >
    <div data-aos="fade-up"><img src={img4} class="img-fluid" alt=""></img></div>
    </div>

 
    </div>

    <div class="col">
    <h1 className='textcolor'>Oil & Gas</h1>
  <p className='contentfont'>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
<p></p>
<p>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety</p></p>
  <button className='button2'>Read more</button> 
    </div>

  </div>
  </div>

{/* -------------------------------4 st grid end --------------------------------------*/}



    </div>
  )
}

export default HomeContent;