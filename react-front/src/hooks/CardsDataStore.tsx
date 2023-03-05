import { create } from "zustand";
import { CardData } from "../types";

interface CardLogic {
    query?: string,
  cardInfo: CardData[][];
  appendCardData: (newCardInfo: CardData[]) => void;
  restoreCardData: (newCardInfo: CardData[]) => void;
  setQuert: (newQuery: string) => void;
}

export const AlterCardDataArray = create<CardLogic>((set, get) => ({
  cardInfo: [[],[],[]],
  appendCardData: (newCardData: CardData[]) =>
    set({
      cardInfo: [
        [
          ...get().cardInfo[0],
          ...newCardData.slice(0, Math.floor(newCardData.length / 3)),
        ],
        [
          ...get().cardInfo[1],
          ...newCardData.slice(
            Math.floor(newCardData.length / 3) + 1,
            Math.floor((2 * newCardData.length) / 3)
          ),
        ],
        [
          ...get().cardInfo[2],
          ...newCardData.slice(
            Math.floor((2 * newCardData.length) / 3) + 1,
            newCardData.length
          ),
        ],
      ],
    }),
  restoreCardData: (newCardData: CardData[]) =>
    set({
      cardInfo: [
        [
          ...newCardData.slice(0, Math.floor(newCardData.length / 3)),
        ],
        [
          ...newCardData.slice(
            Math.floor(newCardData.length / 3) + 1,
            Math.floor((2 * newCardData.length) / 3)
          ),
        ],
        [
          ...newCardData.slice(
            Math.floor((2 * newCardData.length) / 3) + 1,
            newCardData.length
          ),
        ],
      ],
    }),
    setQuert: (newQuery: string) => set({
        query: newQuery
    })
}));
