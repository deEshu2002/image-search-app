import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Getimages from "./hooks/Getimages";

const array = ["apple", "banana", "potato", "reddit"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const data = async () => {
    try {
    } catch (error) {
      console.log("Error sending query Request", error);
    }
  };
  Getimages();

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
