import { useState } from "react";
import "./App.css";
import img1 from "./assets/a.jpg";
import img2 from "./assets/b.jpg";
import img3 from "./assets/c.jpg";

const App = () => {
  const [images, setImages] = useState([img1, img2, img3]);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, index: number) => {
    e.preventDefault();
    const draggedImageIndex = e.dataTransfer.getData("text/plain");
    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[draggedImageIndex];
    newImages[draggedImageIndex] = temp;
    setImages(newImages);
  };

  return (
    <>
      <div className="appContainer">
        <div className="appContainer-div1">
          {images.slice(0, 2).map((image: any, index: number) => (
            <div
              key={index}
              className="appContainer-div1-1"
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
            >
              <img
                draggable
                onDragStart={(e) => handleDragStart(e)}
                src={image}
                className="sp-img"
                id={index.toString()}
              />
            </div>
          ))}
        </div>
        <div
          className="appContainer-div2"
          onDrop={(e) => handleDrop(e, 2)}
          onDragOver={handleDragOver}
        >
          <div className="appContainer-div2-1">
            <img
              draggable
              onDragStart={(e) => handleDragStart(e)}
              src={images[2]}
              className="sp-img"
              id="2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
