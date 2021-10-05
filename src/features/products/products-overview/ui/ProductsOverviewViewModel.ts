import { ICartStore } from "../../../cart/store/createCartStore";
import { ICategory } from "../../../category/domain/model/ICategory";
import { ICategoryPathSlugs } from "../../../shared/domain/ICategoryPathSlugs";
import { IProduct } from "../../product/domain/model/IProduct";
import {
    createOverviewProductViewModel,

} from "./OverviewProduct/OverviewProductViewModel";

export type IProductsOverviewViewModel = ReturnType<typeof createProductsOverviewViewModel>

export interface ICreateProductsOverviewViewModelProps {
    categoryPathSlugs: ICategoryPathSlugs;
    category: ICategory;
    products: IProduct[],
    cartStore: ICartStore,
}

export function createProductsOverviewViewModel({ 
    categoryPathSlugs,
    products,
    cartStore,
    category,
}: ICreateProductsOverviewViewModelProps
) {
    return {
        productsTitle: `${products.length} ${category.categoryName || 'Products'}`,
        overviewProductViewModels: products.map((product) =>
            createOverviewProductViewModel({categoryPathSlugs, product, cartStore})
        ),
        products,
        cartStore,

    };
}
