import { toCurrency } from "../../../utils/toCurrency"
import { ICartStore } from "../store/createCartStore"

export type ICartViewModel = ReturnType<typeof createCartViewModel>

export interface ICartViewModelProps {
    cartStore: ICartStore
}

export function createCartViewModel({cartStore}: ICartViewModelProps){
    return {
        formattedTotalAmount: toCurrency(cartStore.totalAmount),
        products: cartStore.products
    }
}