import React from "react";
// Hook
import { useFecthGifs } from "../hooks/useFecthGifs";
// Components
import GifGridItem from "./GifGridItem";
import Loading from "../components/Loading";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <Loading />}
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
