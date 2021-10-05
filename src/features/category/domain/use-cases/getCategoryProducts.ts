import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICategory } from "../model/ICategory";
import { IProduct } from "../../../products/product/domain/model/IProduct"

export function createGetCategoryProducts(contentApi: IContentApi) {
    return async function getCategoryProducts(category: ICategory): Promise<IProduct[]> {
		const products = await contentApi.getEntriesByTypeThatLinkToEntry(category.id, ContentType.Products);

		if (!products) return [];

        return products.map((product) => {
            
			return {
				id: product.sys.id,
                title: product.fields.title,
				description: product.fields.description,
				subtitle: product.fields.subtitle,
				imgurl: product.fields.imgurl,
				price: product.fields.price,
                slug: product.fields.slug,
			} as IProduct
		});
	};
}