import { create } from "zustand"

type SearchStore = {
    isOpenSearch: boolean,
    openSearch: () => void,
    closeSearch: () => void,
    toggle: () => void
}

export const useSearchStore = create<SearchStore>((set, get) => ({
    isOpenSearch: false,
    openSearch() {
        set({ isOpenSearch: true })
    },
    closeSearch() {
        set({ isOpenSearch: false })
    },
    toggle() {
        set({ isOpenSearch: !get().isOpenSearch })
    }
}))