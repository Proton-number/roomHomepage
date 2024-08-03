import { create } from "zustand";
import Data from "../Components/Data";

export const useStore = create((set) => ({
  index: 0,
  previous: () =>
    set((state) => ({
      index: state.index > 0 ? state.index - 1 : Data.length - 1,
    })),
  next: () => set((state) => ({ index: (state.index + 1) % Data.length })),
  isDrawerOpen: false,
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
}));


