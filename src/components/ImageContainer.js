import React from 'react';

const ImageContainer = () => (
  <div className="image-container">
    <div className="image-item">
      <img src="./pkd.jpg" alt="pkd" />
      <p>Virtually unlimited customization not your thing? Build-A-Droid also offers presets that you can build off of or take as is, like our beloved Phillip K. Dick presets.</p>
    </div>
    <div className="image-item">
      <img id="img-right" src="./robotright.jpg" alt="pkd" />
    </div> 
  </div>
);

export default ImageContainer;