import { createBackdropViewModel } from "./BackdropViewmodel"
import { Dispatch, SetStateAction } from "react"

export type IModalViewModel = ReturnType<typeof createModalViewModel>

export interface IModalViewModelProps {
    isCartModalVisible: boolean;
    setCartModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function createModalViewModel({isCartModalVisible, setCartModalVisible}: IModalViewModelProps) {
    return {
        isCartVisible: isCartModalVisible,
        hideCart: () => setCartModalVisible(false),
        backdropViewModel: createBackdropViewModel({isBackdropVisible: isCartModalVisible, setCartModalVisible})
    }
}