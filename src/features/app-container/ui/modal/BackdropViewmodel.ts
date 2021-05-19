
export type IBackdropViewModel = ReturnType<typeof createBackdropViewModel>

export interface IBackdropViewModelProps {
    isBackdropVisible: boolean;
    hideCart(): void;
}

export function createBackdropViewModel({isBackdropVisible, hideCart}: IBackdropViewModelProps) {
    return {
        isBackdropVisible,
        hideCart
    }
}