import { toCurrency } from "../../../utils/toCurrency";
import { ICartProduct } from "../domain/model/cartProduct";
import { ICartStore } from "../store/createCartStore";

export type ICartProductViewModel = ReturnType<typeof createCartProductViewModel>

export interface ICartProductViewModelProps{
    cartStore: ICartStore;
    product: ICartProduct;
}

export function createCartProductViewModel({cartStore, product}: ICartProductViewModelProps){
    return {
        title: product.title,
        subtitle: product.subtitle,
        imgurl: product.imgurl,
        altImageText: `Image of ${product.title}`,
        productAmount: product.amount,
        formattedProductTotalPrice: toCurrency(product.price * product.amount),
        incrementProductAmount: () => cartStore.incrementAmount(product),
        decrementProductAmount: () => cartStore.decrementAmount(product),
    }
}