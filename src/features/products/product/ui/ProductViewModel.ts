import { toCurrency } from "../../../../utils/toCurrency";
import { IProduct } from "../../products-overview/domain/model/product";

export interface IProductViewModel{
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    imageAltText: string;
    formattedPrice: string;
    product: IProduct;
}

export function createProductViewModel(
    product: IProduct
): IProductViewModel {
    return {
        title: product.title,
        subtitle: product.subtitle,
        imageUrl: product.imgurl,
        imageAltText: `Image of ${product.title}`,
        description: product.description,
        formattedPrice: toCurrency(product.price),
        product: product,
    };
}