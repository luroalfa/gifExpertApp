import React from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <ol>
            <GifGridItem key={img.id} {...img} />
          </ol>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
