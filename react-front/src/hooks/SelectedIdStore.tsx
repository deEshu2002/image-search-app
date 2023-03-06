import { create } from "zustand";

interface SelectStore {
  selectedId: string | null ;
  setSelectedId: (id: string) => void;
  emptySelectedId: () => void;
}

export const SelectedIdStore = create<SelectStore>((set) => ({
    selectedId:null,
    setSelectedId(id) {
        set({selectedId:id})
    },
    emptySelectedId(){
      set({selectedId: null})
    }
}))