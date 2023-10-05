import React from 'react'
// import './Homepage.css'
import img1 from './banner.jpg';
import img2 from "./banner2.png";






{/* image tag to add home image */}

function Homepage() {
  return (

    
    <div >
   
    <div><img src={img1} class="img-fluid" alt=""></img></div>
    <div style={{display:"block",width:"500px",height:"500px", marginLeft:"700px", marginTop:"-400px"}}><img src={img2} class="img-fluid" alt=""></img></div>
    </div>

    
  )
}

export default Homepage;