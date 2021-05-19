import { ICartStore } from "../../../cart/store/createCartStore";

import { IProduct } from "../domain/model/product";
import {
    createProductViewModel,
    IOverviewProductViewModel,
} from "./OverviewProduct/OverviewProductViewModel";

export interface IProductsOverviewViewModel {
    productsTitle: string;
    productViewModels: IOverviewProductViewModel[];
    products: IProduct[];
    cartStore: ICartStore;
}

export function createProductsOverviewViewModel(
    products: IProduct[],
    cartStore: ICartStore
): IProductsOverviewViewModel {
    return {
        productsTitle: `${products.length} Products`,
        productViewModels: products.map((product) =>
            createProductViewModel(product)
        ),
        products,
        cartStore,
    };
}
