import { IProduct } from "../../domain/model/product";
import { toEuroFormat } from "../../../../../utils/CurrencyFormat";
import { ICartStore } from "../../../../cart/store/createCartStore";

export interface IOverviewProductViewModel {
    formattedPrice: string;
    pictureURL: string;
    pictureAltText: string;
    productURL: string;
    product?: IProduct;
    title: string;
    subtitle: string;
    slug: string;
    onClick: () => void;
}

export function createOverviewProductViewModel(product: IProduct, cartStore: ICartStore): IOverviewProductViewModel {
    return {
        formattedPrice: toEuroFormat(product.price),
        pictureURL: product.imgurl,
        pictureAltText: `Image of ${product.title}`,
        productURL: `/product/${product.slug}`,
        title: product.title,
        subtitle: product.subtitle,
        product: product,
        slug: product.slug,
        onClick: () => cartStore.addProduct(product)
    };
}
