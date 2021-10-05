import { ICategory } from "../../category/domain/model/ICategory";
import { IProduct } from "../../products/product/domain/model/IProduct";
import { IShop } from "../../shop/domain/model/IShop";

export type ICategoryPageViewModel = ReturnType<typeof createCategoryPageViewModel>

export interface ICategoryPageViewModelProps {
    category: ICategory;
    products: IProduct[];
}

export function createCategoryPageViewModel({category, products}: ICategoryPageViewModelProps) {
    return {
        name: category.categoryName,
        category,
        products
    };
}