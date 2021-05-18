import { ICartStore } from "../../../cart/store/createCartStore";


export type IHeaderViewModel = ReturnType<typeof createHeaderViewModel>

export interface IHeaderViewModelProps {
    cart: ICartStore;
    onCartClick(): void;
}

export function createHeaderViewModel({cart, onCartClick}: IHeaderViewModelProps){
    return {
        cartCount: cart.cartCount,
        onCartClick
    }
}