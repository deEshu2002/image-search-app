import { motion } from "framer-motion";
import { memo } from "react";
import { AlterCardDataArray } from "../../hooks/CardsDataStore";
import { SelectedIdStore } from "../../hooks/SelectedIdStore";
import Card from "./Card";

export default memo(function () {
  const CardInfo = AlterCardDataArray((state) => state.cardInfo);

  const setSelectedId = SelectedIdStore((state) => state.setSelectedId);


  return (
    <>
      {CardInfo!.map((row, rowIdx) => {
        return (
          <motion.div className=" flex-grow-0 flex-shrink flex flex-col w-auto m-2" key={rowIdx} layout>
            {row.map((card,idx) => {
              const signalVisibility = false;
              const props = { ...card, signalVisibility};
              return (
                <motion.div
                  key={card.id}
                  className="flex flex-col bg-white !border border-gray-200 rounded-lg shadow-sm mt-4 cursor-pointer max-w-sm"
                  layoutId={card.id}
                  onClick={() => setSelectedId(card.id)}
                >
                  <Card {...props} />
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </>
  );
});