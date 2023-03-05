import { create } from "zustand";

interface SelectStore {
  selectedId: number| null;
  setSelectedId: (id: number) => void;
}

export const SelectedIdStore = create<SelectStore>((set) => ({
    selectedId:null,
    setSelectedId(id) {
        set({selectedId:id})
    },
}))