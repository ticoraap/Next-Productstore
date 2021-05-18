import { IProduct } from "../../domain/model/product";
import { toCurrency } from "../../../../../utils/toCurrency";

export interface IOverviewProductViewModel {
    formattedPrice: string;
    pictureURL: string;
    pictureAltText: string;
    productURL: string;
    product?: IProduct;
    title: string;
    subtitle: string;
    slug: string;
}

export function createProductViewModel(product: IProduct): IOverviewProductViewModel {
    return {
        formattedPrice: toCurrency(product.price),
        pictureURL: product.imgurl,
        pictureAltText: `Image of ${product.title}`,
        productURL: `/product/${product.slug}`,
        title: product.title,
        subtitle: product.subtitle,
        product: product,
        slug: product.slug,
    };
}
