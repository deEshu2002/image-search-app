import { useEffect, useState } from "react";
import Unsplash from "unsplash-js";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const array = ["apple", "banana", "potato", "reddit"];

interface RandomPhotos {
  image: string;
  userName: string;
  userTag: string;
  likesCount: number;
}

// const api = createApi({
//   accessKey: `${process.env.REACT_APP_UNSPLASH_ACCESS_API_KEY}`,
// });
// const api = new

function updateImagesData(data: any) {}

function App() {
  // useEffect(() => {
  // async function reportData() {
  //   const data = await api.photos
  //     .getRandom({ count: 10 })
  //     .then((jsonRes) => updateImagesData(jsonRes))
  //     .catch((e) => console.log("Error: " + e));
  // }
  // }, []);

  const [images, setImages] = useState({});

  return (
    <div className="App flex flex-col items-center">
      <Navbar />
      <div className="flex flex-wrap justify-center max-w-7xl mt-16 gap-6">
        {array.map((elem) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default App;
