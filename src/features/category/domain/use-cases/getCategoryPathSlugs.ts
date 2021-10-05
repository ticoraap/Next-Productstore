import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICategoryPathSlugs } from "../../../shared/domain/ICategoryPathSlugs";

export function createGetCategoryPathSlugs(contentApi: IContentApi) {
	return async function getCategoryPathSlugs(): Promise<ICategoryPathSlugs[]> {
        const categories = await contentApi.getEntriesByType(ContentType.Categories, { include: 4});
        return categories.flatMap(category => {
            if (!category?.fields?.shops) return []
            
            return category.fields.shops.flatMap(shop => {
                if (!shop.fields?.regions) return []

                return shop.fields.regions.flatMap(region => {
                    if (!region?.fields?.slug) return []
                    if (!region?.fields?.country?.fields?.slug) return []
                    
                    return {
                        country: region.fields.country.fields.slug,
                        region: region.fields.slug,
                        shop: shop.fields.slug,
                        category: category.fields.slug,
                    } as ICategoryPathSlugs
                })
            })
        })
	};
}
