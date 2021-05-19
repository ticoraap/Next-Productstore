import { ICartStore } from "../../../cart/store/createCartStore";

export type IHeaderViewModel = ReturnType<typeof createHeaderViewModel>

export interface IHeaderViewModelProps {
    cartStore: ICartStore;
    showCart(): void;
}

export function createHeaderViewModel({cartStore, showCart}: IHeaderViewModelProps){
    return {
        cartCount: cartStore.cartCount,
        showCart
    }
}
