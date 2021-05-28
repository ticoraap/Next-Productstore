import { ICartStore } from "../../../cart/store/createCartStore";

import { IProduct } from "../domain/model/product";
import {
    createOverviewProductViewModel,
    IOverviewProductViewModel,
} from "./OverviewProduct/OverviewProductViewModel";

export interface IProductsOverviewViewModel {
    productsTitle: string;
    overviewProductViewModels: IOverviewProductViewModel[];
    products: IProduct[];
    cartStore: ICartStore;
}

export function createProductsOverviewViewModel(
    products: IProduct[],
    cartStore: ICartStore,
): IProductsOverviewViewModel {
    return {
        productsTitle: `${products.length} Products`,
        overviewProductViewModels: products.map((product) =>
            createOverviewProductViewModel({product, cartStore})
        ),
        products,
        cartStore,
    };
}
