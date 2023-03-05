import { motion } from "framer-motion";
import { memo } from "react";
import { AlterCardDataArray } from "../hooks/CardsDataStore";
import { SelectedIdStore } from "../hooks/SelectedIdStore";
import Card from "./Card";


export default memo( function(){
  const CardInfo = AlterCardDataArray((state) => state.cardInfo);
  const selectedId = SelectedIdStore(state => state.selectedId);
  const setSelectedId = SelectedIdStore(state => state.setSelectedId);

    return (
    <>
    {CardInfo!.map((row, rowIdx) => {
                return (
                  <motion.div className="flex flex-col w-auto" key={rowIdx}>
                    {row.map((card, idx) => {
                      const props = { ...card, selectedId };
                      return (
                        <motion.div
                          // key={`${card.id}`}
                          onClick={() => {
                            setSelectedId(card.id);
                          }}
                        >
                          <Card {...props}/>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })
            }</>)
          })

