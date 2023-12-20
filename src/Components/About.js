import React from 'react'

import BGanime from "./BGanime";
import Overview from "./Overview";


const Testimonial = () => {
  return (
    <div id='test'>
      {/* <h2>About</h2> */}
       <div className="Section" style={{display:"grid"}}> 
       <Overview/>
        <BGanime />
       </div>
     

      
    </div>
    
  )
}


export default Testimonial
