import { IContentApi } from "../../../../shared/data/contentful";
import { ContentType } from "../../../../shared/data/contentful/constants/ContentType";

export function createGetProducts(contentApi: IContentApi) {
    return async () => {
		const response = await contentApi.getEntriesByType(ContentType.Products)

		if (!response) return [];

        return response.map((item: any) => {
            return {
                id: item.sys.id,
                title: item.fields.title,
                subtitle: item.fields.subtitle,
                description: item.fields.description,
                price: item.fields.price,
                imgurl: item.fields.imgurl,
                slug: item.fields.slug,
            };
        });
	};
}