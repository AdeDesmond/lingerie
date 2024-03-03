import { create  } from "zustand";


export type MobileStoreNav = {
    isOpen:boolean,
    onOpen:() => void;
    onClose:() => void;
}

export const useMobileNav = create<MobileStoreNav>((set) => ({
    isOpen:false,
    onOpen:() => set({isOpen:true}),
    onClose:() => set({ isOpen:false })
}))