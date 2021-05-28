import { toEuroFormat } from "../../../utils/CurrencyFormat";
import { ICartProduct } from "../domain/model/cartProduct";
import { ICartStore } from "../store/createCartStore";

export type ICartProductViewModel = ReturnType<typeof createCartProductViewModel>

export interface ICartProductViewModelProps{
    cartStore: ICartStore;
    product: ICartProduct;
}

export function createCartProductViewModel({cartStore, product}: ICartProductViewModelProps){
    return {
        id: product.id,
        title: product.title,
        subtitle: product.subtitle,
        imgurl: product.imgurl,
        altImageText: `Image of ${product.title}`,
        get productAmount(){
            return product.amount
        },
        get formattedProductTotalPrice(){ 
            return toEuroFormat(cartStore.getTotalProductPrice(product.id)) 
        },
        incrementProductAmount: () => cartStore.incrementAmount(product),
        decrementProductAmount: () => cartStore.decrementAmount(product),
    }
}