import { IContentApi } from "../../../../../contentful";
import { ContentType } from "../../../../../contentful/constants/ContentType";
import { IProductPathSlugs } from "../../../../shared/domain/IProductPathSlugs";



export function createGetProductPathSlugs(contentApi: IContentApi) {
	return async function getProductPathSlugs(): Promise<IProductPathSlugs[]> {
        const products = await contentApi.getEntriesByType(ContentType.Products, { include: 4});
        return products.flatMap(product => {
            if (!product.fields?.category) return []
            if (!product.fields?.category?.fields?.shops) return []
            
            return product.fields.category.fields.shops.flatMap(shop => {
                if (!shop.fields?.regions) return []

                return shop.fields.regions.flatMap(region => {
                    if (!region?.fields?.slug) return []
                    if (!region?.fields?.country?.fields?.slug) return []
                    
                    return {
                        country: region.fields.country.fields.slug,
                        region: region.fields.slug,
                        shop: shop.fields.slug,
                        category: product.fields.category.fields.slug,
                        product: product.fields.slug,
                    }
                })
            })
            
        })
	};
}
