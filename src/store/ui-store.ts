import { create } from 'zustand'

type UiState = {
  isMenuOpen: boolean
  setMenuOpen: (isOpen: boolean) => void
}

export const useUiStore = create<UiState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}))
