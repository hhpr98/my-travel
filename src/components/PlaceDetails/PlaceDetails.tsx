import React from "react";

import "./placedetails.css";

// Ref: https://codepen.io/abmin/pen/jZKrze
const PlaceDetails = (): JSX.Element => {
  const handleImageClick = (): void => {
    const targetImage = document.querySelector("#full-image") as HTMLImageElement;
    const clickedImage = event.target as HTMLImageElement;
    if (targetImage && clickedImage) {
      targetImage.setAttribute("src", clickedImage.src);
      const showElement = document.querySelector("#image-viewer") as HTMLElement;
      if (showElement) {
        showElement.style.display = "block"; // Use style.display to show
      }
    }
  };

  const handleCloseImage = (): void => {
    const imageViewer = document.getElementById("image-viewer");
    if (imageViewer) {
      imageViewer.style.display = 'none';
    }
  };

  return (
    <div>
      <div className="images">
        <img src="https://www.w3schools.com/howto/img_fjords.jpg" alt="image" onClick={handleImageClick} />
        <img src="https://www.w3schools.com/howto/img_fjords.jpg" alt="image" onClick={handleImageClick} />
        <img src="https://www.w3schools.com/howto/img_fjords.jpg" alt="image" onClick={handleImageClick} />
      </div>
      <div id="image-viewer">
        <span className="close" onClick={handleCloseImage}>&times;</span>
        <img className="modal-content" id="full-image" />
      </div>
    </div>
  );
};

export default PlaceDetails;
