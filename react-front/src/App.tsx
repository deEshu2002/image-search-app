import { useEffect, useState, useRef, Suspense } from "react";
import Navbar from "./components/NavBar/Navbar";
import GetImages from "./hooks/Getimages";
import Card from "./components/Cards/Card";
import { useColorMode } from "./hooks/UseColorMode";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletonCard } from "./components/SuspenseFallBack/Skeleton";
import { CardData } from "./types";
import { AlterCardDataArray } from "./hooks/CardsDataStore";
import LoadingRotator from "./components/SuspenseFallBack/LoadingRotator";
import useOnScreen from "./hooks/UseOnScreen";
import { SelectedIdStore } from "./hooks/SelectedIdStore";
import MappedCards from "./components/Cards/MappedCards";
import CardCloseButton from "./components/Cards/CardCloseButton";

function App() {
  const spinnerRef = useRef<HTMLDivElement>(null);
  const cardsArrayRef = useRef<HTMLDivElement>(null);

  const mode = useColorMode((state) => state.mode);
  const query = AlterCardDataArray((state) => state.query);
  const selectedId = SelectedIdStore((state) => state.selectedId);

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
    return () => window.removeEventListener("load", onPageLoad);
  }, []);

  function dispatchModalProps(id: string | null) {
    const row = CardInfo.flat();
    const props = row.find((elem) => elem.id === id) as CardData;
    const signalVisibility = true;
    return { ...props, signalVisibility };
  }

  const isVisible = useOnScreen(spinnerRef);

  useEffect(() => {
    if (isVisible) {
      addImages();
    }
  }, [isVisible]);

  useEffect(() => {
    if (selectedId != null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedId]);

  return (
    <>
      <div
        className={`${
          mode ? "bg-slate-800 text-white" : "bg-white"
        } flex flex-col items-center relative h-full`}
      >
        <Navbar />
        <motion.div className={`w-5/6 mt-16 `}>
          {isloading && CardInfo[0].length < 2 ? (
            <SkeletonCard />
          ) : (
            <Suspense fallback={<SkeletonCard />}>
              <motion.div className={`flex flex-wrap justify-center`} layout>
                {<MappedCards />}
              </motion.div>
            </Suspense>
          )}
          <div ref={spinnerRef}>
            <LoadingRotator />
          </div>
        </motion.div>
        <AnimatePresence>
          {selectedId && (
            <motion.div className="fixed flex justify-center top-0 left-0 w-full h-full bg-transparent/20 z-[1000] overflow-y-auto">
              <motion.div
                className="absolute bg-white z-[10000] w-[98%] top-[2%] flex flex-row justify-center rounded-xl"
                layoutId={selectedId}
              >
                <CardCloseButton />
                <Card {...dispatchModalProps(selectedId)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
