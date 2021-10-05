import { IRegionPathSlugs } from "../../shared/domain/IRegionPathSlugs";
import { IShop } from "../../shop/domain/model/IShop";
import { IRegion } from "../domain/model/IRegion";


export type IRegionPageViewModel = ReturnType<typeof createRegionPageViewModel>

export interface IRegionPageViewModelProps {
    regionPathSlugs: IRegionPathSlugs;
    region: IRegion;
    shops: IShop[];
}

export function createRegionPageViewModel({regionPathSlugs,region, shops}: IRegionPageViewModelProps) {
    return {
        name: region.regionName,
        textLinks: shops.map(shop => {
            return {
                pathSlugs: {
                    country: regionPathSlugs.country,
                    region: regionPathSlugs.region,
                    shop: shop.slug
                },
                linkText: shop.shopName
            }
        })
    };
}