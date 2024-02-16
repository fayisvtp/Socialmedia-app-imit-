import React, { useState } from 'react';
import image0 from '../assets/image-0.png';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import ComentBox from './ComentBox';

export default function Popup() {
  const [selectedImage, setSelectedImage] = useState(image0);
  const [show, setShow] = useState(false);

  const showComent = () => {
    setShow(!show);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="col-12 popup d-flex p-4">
        <div className="col-6">
          <div className="card images_showing h-100 shadow">
            <img className="w-full h-full" src={selectedImage} alt="" />
          </div>
        </div>

        <div className="col-6">
          <div className="buttons gap-1 col-12 d-flex justify-content-center m-2">
            <div className="col-6 like-btn text-center">
              <button
                className={`col-12 h-12 border-1 `}
                style={{ borderColor: '#CF796C', borderRadius: '30px' }}
              >
                like
              </button>
            </div>
            <div className="col-6 like-btn text-center">
              <button
                onClick={showComent}
                className="col-12 h-12 "
                style={{ backgroundColor: '#CF796C', borderRadius: '30px' }}
              >
                Comment
              </button>
            </div>
          </div>
          {show && <ComentBox />}
        </div>
      </div>
      <div className="col-12 d-flex p-3 images">
    
        <img
          className="col-4 cursor-pointer"
          src={image1}
          alt=""
          onClick={() => handleImageClick(image1)}
        />
        <img
          className="col-4 cursor-pointer"
          src={image2}
          alt=""
          onClick={() => handleImageClick(image2)}
        />
        <img
          className="col-4 cursor-pointer"
          src={image3}
          alt=""
          onClick={() => handleImageClick(image3)}
        />
      </div>
    </>
  );
}
