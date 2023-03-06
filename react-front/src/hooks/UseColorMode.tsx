import { create } from "zustand";

interface ColorMode {
  mode: boolean;
  toggleMode: (mode: boolean) => void;
}

export const useColorMode = create<ColorMode>((set) => ({
  mode: false,
  toggleMode: (mode: boolean) => set({ mode: mode }),
}));
