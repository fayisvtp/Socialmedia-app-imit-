// Desert.jsx
import React, { useState } from "react";
import anitta from "../assets/anitta.png";
import desert from "../assets/desert.png";
import ComentBox from "./ComentBox";
export default function Desert() {
    const [show, setShow] = useState(false);

    const showComent = () => {
      setShow(!show);
    };

  return (
    <>
      <div className="row m-3 shadow">
        <div className="col-6  d-flex align-items-center justify-content-start ">
          <div className="profile d-flex">
            <img
              src={anitta}
              alt="profile pic"
              style={{ borderColor: "#00000" }}
            />

            <p className="anite mt-3">Anitta K C</p>
          </div>
        </div>

        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className="report-button">
            <button>report</button>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center ml-2 justify-content-start">
          <div className="text d-flex">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>

            <p>Anitta K C</p>
          </div>
        </div>

        <div className="image-desert ">
          <img className="w-full " src={desert} alt="desrt image" />
        </div>

        <div className="buttons gap-1 col-12 d-flex justify-content-center m-2">
          <div className="col-6 like-btn text-center">
          <button className={`col-12 h-12 border-1  `} style={{borderColor:'#CF796C', borderRadius:'30px'}}>like</button>

          </div>
          <div className="col-6 like-btn text-center">
            <button onClick={showComent} className="col-12 h-12 " style={{ backgroundColor:'#CF796C' ,borderRadius:'30px'}}>Comment</button>
            </div>
          
        </div>
      {show && (
        <div className='w-full  h-96'>
          <ComentBox/>
        </div>
      )}
      </div>

    </>
  );
}
