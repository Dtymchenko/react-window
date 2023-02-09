import React from "react";
import "./App.css";
import axios from "axios";
import Image from "./components/Image/Image";
import { FixedSizeList as List } from "react-window";

function App() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const getImg = async () => {
      const data = await axios.get(
        // "https://jsonplaceholder.typicode.com/photos?&_limit=10"
        "https://jsonplaceholder.typicode.com/photos"
      );
      setImages(data.data);
    };
    getImg();
  }, []);

  return (
    <div className="App">
      <div>
        <List
          width={1400}
          height={700}
          itemCount={images.length}
          itemSize={120}
        >
          {/* {images} */}
          {images.map((el) => (
            <Image key={el.id} el={el} />
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
