import React from 'react'
import girl from '../assets/girl.png'
import insta from '../assets/insta icon.png'
export default function ImageUpload() {
  return (
    <>
      <div className="col-12 bg-light shadow d-flex  ">
        <div className='instabg '>
            <img src={insta} alt="rectange icon " />
        </div>
        <div className="buttnon d-flex  align-items-center justify-content-center  col-9" >
  
          <button style={{backgroundColor:'#C08C5D', border:'none', width:'60vh', height:'5vh',borderRadius:'30px',color:'white'}}>
          Upload Images
          </button>
        </div>
        <div className=''>
            <img src= {girl} alt="girl" />
        </div>
      </div>
    </>
  )
}
