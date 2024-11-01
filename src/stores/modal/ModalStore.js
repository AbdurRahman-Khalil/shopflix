import { create } from "zustand";

import { devtools } from "zustand/middleware";


const modalStore = (set) => ({

    isModalOpen: false,

    // Actions
    openModal: () => set({
        isModalOpen: true
    }),

    closeModal: () => set({
        isModalOpen: false
    }),

});


const useModalStore = create(devtools(modalStore));

export default useModalStore;