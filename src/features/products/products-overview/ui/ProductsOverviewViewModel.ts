import { IProduct } from "../domain/model/product";
import {
    createProductViewModel,
    IProductViewModel,
} from "./OverviewProduct/OverviewProductViewModel";

export interface IProductsOverviewViewModel {
    productsTitle: string;
    productViewModels: IProductViewModel[];
    products: IProduct[];
}

export function createProductsOverviewViewModel(
    products: IProduct[]
): IProductsOverviewViewModel {
    return {
        productsTitle: `${products.length} Products`,
        productViewModels: products.map((product) =>
            createProductViewModel(product)
        ),
        products,
    };
}
