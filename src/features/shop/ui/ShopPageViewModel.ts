import { ICategory } from "../../category/domain/model/ICategory";
import { IShopPathSlugs } from "../../shared/domain/IShopPathSlugs";
import { IShop } from "../../shop/domain/model/IShop";

export type IShopPageViewModel = ReturnType<typeof createShopPageViewModel>

export interface IShopPageViewModelProps {
    shopPathSlugs: IShopPathSlugs;
    categories: ICategory[];
    shop: IShop;
}

export function createShopPageViewModel({shopPathSlugs, shop, categories}: IShopPageViewModelProps) {
    return {
        name: shop.shopName,
        shop,
        categories,
        textLinks: categories.map(category => {
            return {
                pathSlugs: {
                    country: shopPathSlugs.country,
                    region: shopPathSlugs.region,
                    shop: shopPathSlugs.shop,
                    category: category.slug
                },
                linkText: category.categoryName
            }
        })
    };
}