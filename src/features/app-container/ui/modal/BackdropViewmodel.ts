import { Dispatch, SetStateAction } from "react"

export type IBackdropViewModel = ReturnType<typeof createBackdropViewModel>

export interface IBackdropViewModelProps {
    isBackdropVisible: boolean;
    setCartModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function createBackdropViewModel({isBackdropVisible, setCartModalVisible}: IBackdropViewModelProps) {
    return {
        isVisible: isBackdropVisible,
        onBackdropClick: () => setCartModalVisible(false)
    }
}