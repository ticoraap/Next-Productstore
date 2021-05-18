
import { ICartStore } from "../../../cart/store/createCartStore";

export type IModalViewModel = ReturnType<typeof createModalViewModel>

export interface IModalViewModelProps {
    isCartVisible: boolean;
    onCartHidden(): void;
}

export function createModalViewModel({isCartVisible, onCartHidden}: IModalViewModelProps) {
    return {
        isCartVisible,
        onCartHidden
    }
}