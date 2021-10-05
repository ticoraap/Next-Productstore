import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IShopPathSlugs } from "../../../shared/domain/IShopPathSlugs";

export function createGetShopPathSlugs(contentApi: IContentApi) {
	return async function getShopPathSlugs(): Promise<IShopPathSlugs[]> {
        const shops = await contentApi.getEntriesByType(ContentType.Shops, { include: 3});
        return shops.flatMap(shop => {
            if (!shop.fields?.regions) return []
            
            return shop.fields.regions.flatMap(region => {
                if (!region?.fields?.slug) return []
                if (!region?.fields?.country?.fields?.slug) return []

                return {
                    shop: shop.fields.slug,
                    region: region.fields.slug,
                    country: region.fields.country.fields.slug,
                }
            })
        })
	};
}
