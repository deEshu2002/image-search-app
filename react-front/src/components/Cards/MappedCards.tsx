import { motion } from "framer-motion";
import { memo } from "react";
import { AlterCardDataArray } from "../../hooks/CardsDataStore";
import { SelectedIdStore } from "../../hooks/SelectedIdStore";
import Card from "./Card";
import CardCloseButton from "./CardCloseButton";

export default memo(function () {
  const CardInfo = AlterCardDataArray((state) => state.cardInfo);

  const selectedId = SelectedIdStore((state) => state.selectedId);
  const setSelectedId = SelectedIdStore((state) => state.setSelectedId);

  return (
    <>
      {CardInfo!.map((row, rowIdx) => {
        return (
          <motion.div className="flex flex-col w-auto" key={rowIdx}>
            {row.map((card, idx) => {
              const signalVisibility = false;
              const props = { ...card,signalVisibility};
              return (
                <motion.div
                  // key={`${card.id}`}
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
