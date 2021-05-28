import { createBackdropViewModel } from "./BackdropViewmodel"
import { Dispatch, SetStateAction } from "react"

export type ICartModalContentViewModel = ReturnType<typeof createCartModalContentViewModel>

export interface ICartModalContentViewModelProps {
    isCartModalVisible: boolean;
    setCartModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function createCartModalContentViewModel({isCartModalVisible, setCartModalVisible}: ICartModalContentViewModelProps) {
    return {
        isCartVisible: isCartModalVisible,
        hideCart: () => setCartModalVisible(false),
        backdropViewModel: createBackdropViewModel({isBackdropVisible: isCartModalVisible, setCartModalVisible})
    }
}