import { IProduct } from "../domain/model/product";
import {
    createProductViewModel,
    IOverviewProductViewModel,
} from "./OverviewProduct/OverviewProductViewModel";

export interface IProductsOverviewViewModel {
    productsTitle: string;
    productViewModels: IOverviewProductViewModel[];
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
