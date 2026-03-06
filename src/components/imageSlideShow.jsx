import { useState } from "react";

export default function ImageSlideShow(props) {
  const images = props.images;
  const [activeImage, setActiveImage] = useState(0);

  function getClassNameForActiveImg(index) {
    if (index == activeImage) {
      return "w-[95px] h-[95px] object-contain border-2 border-accent rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-sm hover:shadow-accent/30";
    } else {
      return "w-[90px] h-[90px] object-contain border-2 border-gray-300 rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-sm hover:shadow-gray-300";
    }
  }
  return (
    <div className="w-[500px] h-[600px] flex flex-col p-1 items-center">
      <img
        src={images[activeImage]}
        className="h-[500px] w-[450px] object-contain transition-transform duration-500 hover:scale-105"
      />
      <div className="w-full h-[100px] flex flex-row gap-4 p-1 justify-center items-center">
        {images.map((img, index) => {
          return (
            <img
              onClick={() => {
                setActiveImage(index);
              }}
              key={index}
              src={img}
              className={getClassNameForActiveImg(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
