import { create } from "zustand";

import { devtools } from "zustand/middleware";


const modalStore = (set) => ({

    isClearModal: false,
    isSuccessModal: false,

    // Actions
    setModal: (modalName, state) => set({
        [modalName]: state
    }),

});


const useModalStore = create(devtools(modalStore));

export default useModalStore;