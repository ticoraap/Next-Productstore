import { createBackdropViewModel } from "./BackdropViewmodel"

export type IModalViewModel = ReturnType<typeof createModalViewModel>

export interface IModalViewModelProps {
    isCartVisible: boolean;
    hideCart(): void;
}

export function createModalViewModel({isCartVisible, hideCart}: IModalViewModelProps) {
    return {
        isCartVisible,
        hideCart,
        backdropViewModel: createBackdropViewModel({isBackdropVisible: isCartVisible, hideCart})
    }
}