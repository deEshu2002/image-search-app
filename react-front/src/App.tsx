import { useEffect, useState, useRef, useMemo } from "react";
import Navbar from "./components/Navbar";
import GetImages from "./hooks/Getimages";
import Card from "./components/Card";
import { useColorMode } from "./hooks/UseColorMode";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletonCard } from "./components/Skeleton";
import { CardData } from "./types";
import { AlterCardDataArray } from "./hooks/CardsDataStore";
import LoadingRotator from "./components/LoadingRotator";

function App() {
  const spinnerRef = useRef<HTMLDivElement>(null);

  const mode = useColorMode((state) => state.mode);
  const query = AlterCardDataArray((state) => state.query);

  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [cardOpen, setCardOpen] = useState(false);
  const [apicallCount, setApiCallCount] = useState(0);

  const CardInfo = AlterCardDataArray((state) => state.cardInfo);
  const AppendCards = AlterCardDataArray((state) => state.appendCardData);

  function addImages() {
    GetImages(query).then((data) => {
      const newArr = data as CardData[];
      AppendCards(newArr);
      setLoading(false);
      setApiCallCount((count) => count + 1);
      console.log(`Api called ${apicallCount + 1} times`);
    });
  }

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      addImages();
    }
  ),[spinnerRef])

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

  useEffect(() => {
    if (document.readyState == "complete") {
      observer.observe(spinnerRef.current as Element);
    } 
    return () => {
      observer.disconnect();
    };
  }, [spinnerRef.current]);




  function dispatchModalProps(id: number | null) {
    const row = CardInfo.flat();
    const props = row.find((elem) => elem.id === id) as CardData;
    return { ...props, selectedId, setCardOpen };
  }


  return (
    <>
      <div
        className={`${
          mode ? "bg-slate-800 text-white" : "bg-white"
        } flex flex-col items-center relative h-full`}
      >
        <Navbar />
        <div className={`w-4/6 mt-16 `}>
          {loading ? (
            <SkeletonCard />
          ) : (
            <div className={`flex felx-row justify-center gap-4`}>
              {CardInfo!.map((row, rowIdx) => {
                return (
                  <motion.div className="flex flex-col w-auto" key={rowIdx}>
                    {row.map((card, idx) => {
                      const props = { ...card, selectedId };
                      return (
                        <motion.div
                          key={card.id}
                          onClick={() => {
                            setSelectedId(card.id);
                          }}
                        >
                          <Card {...props} key={card.id}/>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </div>
          )}
          {!loading && (
            <div ref={spinnerRef}>
              <LoadingRotator />
            </div>
          )}
        </div>
        {cardOpen && <Card {...dispatchModalProps(selectedId)} />}
      </div>
    </>
  );
}

export default App;
