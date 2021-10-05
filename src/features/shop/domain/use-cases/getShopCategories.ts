import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICategory } from "../../../category/domain/model/ICategory";
import { IShop } from "../../../shop/domain/model/IShop";

export function createGetShopCategories(contentApi: IContentApi) {
    return async function getShopCategories(shop: IShop): Promise<ICategory[]> {
		const categories = await contentApi.getEntriesByTypeThatLinkToEntry(shop.id, ContentType.Categories);

		if (!categories) return [];

        return categories.map((category) => {
            
			return {
				id: category.sys.id,
                categoryName: category.fields.name,
                categoryDescription: category.fields.description,
                slug: category.fields.slug,
			}
		});
	};
}