import { IProduct } from "../../../product/domain/model/IProduct";
import { toEuroFormat } from "../../../../../utils/CurrencyFormat";
import { ICartStore } from "../../../../cart/store/createCartStore";
import { ICategoryPathSlugs } from "../../../../shared/domain/ICategoryPathSlugs";
import { toUrl } from "../../../../shared/link/domain/use-cases/toUrl";

export type IOverviewProductViewModel = ReturnType<typeof createOverviewProductViewModel>

export interface IOverviewProductViewModelProps{
    categoryPathSlugs: ICategoryPathSlugs;
    product: IProduct;
    cartStore: ICartStore;
}

export function createOverviewProductViewModel({categoryPathSlugs, product, cartStore}: IOverviewProductViewModelProps) {
    return {
        title: product.title,
        subtitle: product.subtitle,
        formattedPrice: toEuroFormat(product.price),
        pictureURL: product.imgurl,
        pictureAltText: `Image of ${product.title}`,
        productURL: `${toUrl(categoryPathSlugs)}/${product.slug}`,
        onClick: () => cartStore.addProduct(product),
        key: product.slug
    };
}
