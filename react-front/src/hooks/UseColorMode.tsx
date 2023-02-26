import { create } from "zustand";

interface IBook {
  mode: boolean;
  toggleMode: (mode: boolean) => void;
}

export const useColorMode = create<IBook>((set) => ({
  mode: false,
  toggleMode: (mode: boolean) => set({ mode: mode }),
}));
