import { useEffect, useState, useRef} from "react";
import Navbar from "./components/Navbar";
import GetImages from "./hooks/Getimages";
import Card from "./components/Card";
import { useColorMode } from "./hooks/UseColorMode";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletonCard } from "./components/Skeleton";
import { CardData } from "./types";
import { AlterCardDataArray } from "./hooks/CardsDataStore";
import LoadingRotator from "./components/LoadingRotator";
import useOnScreen from "./hooks/UseOnScreen";
import {SelectedIdStore} from './hooks/SelectedIdStore';
import MappedCards from "./components/MappedCards"; 

function App() {
  const spinnerRef = useRef<HTMLDivElement>(null);

  const mode = useColorMode((state) => state.mode);
  const query = AlterCardDataArray((state) => state.query);
  const selectedId = SelectedIdStore(state => state.selectedId)

  const [isloading, setIsLoading] = useState(true);

  const [apicallCount, setApiCallCount] = useState(0);

  const CardInfo = AlterCardDataArray((state) => state.cardInfo);
  const AppendCards = AlterCardDataArray((state) => state.appendCardData);

  function addImages() {
    GetImages(query).then((data) => {
      const newArr = data as CardData[];
      AppendCards(newArr);
      setIsLoading(false);
      setApiCallCount((count) => count + 1);
      console.log(`Api called ${apicallCount + 1} times`);
    });
  }

  useEffect(() => {
    const onPageLoad = () => {
    addImages();
    };
    if (document.readyState == "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }
    return () => window.removeEventListener("load", onPageLoad)
  }, []);

  function dispatchModalProps(id: string | null) {
    const row = CardInfo.flat();
    const props = row.find((elem) => elem.id === id) as CardData;
    return { ...props, selectedId };
  }

   const isVisible = useOnScreen(spinnerRef);

   useEffect(() => {
    if(isVisible){
      addImages();
    }
   }, [isVisible])

     return (
    <>
      <div
        className={`${
          mode ? "bg-slate-800 text-white" : "bg-white"
        } flex flex-col items-center relative h-full`}
      >
        <Navbar />
        <div className={`w-4/6 mt-16 `}>
          {(isloading && CardInfo[0].length < 2) ? (
            <SkeletonCard />
          ) : (
            <div className={`flex felx-row justify-center gap-4`}>
              {
                <MappedCards/>
              }
            </div>
          )}
            <div ref={spinnerRef}>
              <LoadingRotator />
            </div>
        </div>
        <AnimatePresence>
        {selectedId && <Card {...dispatchModalProps(selectedId)} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;