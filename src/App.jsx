import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./assets/Components/imageCard";
import SearchImage from "./assets/Components/searshImage";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("landscape");
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://pixabay.com/api/?key=44072220-09b965347572e98b921c6cf0a&q=${term}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(data.hits);
    }
    getData();
  }, [term]);
  return (
    <>
      <SearchImage searchText={(text) => setTerm(text)} />
      <div className="container">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
