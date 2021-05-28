import { toEuroFormat } from "../../../utils/CurrencyFormat"
import { ICartStore } from "../store/createCartStore"
import { createCartProductViewModel } from "./CartProductViewModel"

export type ICartViewModel = ReturnType<typeof createCartViewModel>

export interface ICartViewModelProps {
    cartStore: ICartStore
}

export function createCartViewModel({cartStore}: ICartViewModelProps){
    return {
        get formattedTotalAmount(){
            return toEuroFormat(cartStore.getTotalCartPrice())
        },
        get cartProductViewModels(){
            return cartStore.products.map(product => {
                return createCartProductViewModel({cartStore, product})
            })
        },
        get cartCount(){
            return cartStore.getCartCount();
        },
    }
}