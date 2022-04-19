import React from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = React.useState(["Naruto"]);

  return (
    <div id="container">
      <h1>GifExpertApp</h1>
      <p>
        On this page you can find any gif image you want, it's simple, you just
        have to put a word in the search engine and that's it, gif images of the
        word you put will appear.
      </p>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
