import { IProduct } from "../../domain/model/product";
import { toEuroFormat } from "../../../../../utils/CurrencyFormat";
import { ICartStore } from "../../../../cart/store/createCartStore";

export type IOverviewProductViewModel = ReturnType<typeof createOverviewProductViewModel>

export interface IOverviewProductViewModelProps{
    product: IProduct;
    cartStore: ICartStore;
}

export function createOverviewProductViewModel({product, cartStore}: IOverviewProductViewModelProps) {
    return {
        title: product.title,
        subtitle: product.subtitle,
        formattedPrice: toEuroFormat(product.price),
        pictureURL: product.imgurl,
        pictureAltText: `Image of ${product.title}`,
        productURL: `/product/${product.slug}`,
        onClick: () => cartStore.addProduct(product),
        key: product.slug
    };
}
