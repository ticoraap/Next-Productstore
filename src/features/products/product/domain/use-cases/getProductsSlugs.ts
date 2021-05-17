import { IContentApi } from "../../../../shared/data/contentful";
import { ContentType } from "../../../../shared/data/contentful/constants/ContentType";

export function createGetProductsSlugs(contentApi: IContentApi) {
    return async () => {
		const response = await contentApi.getEntriesByType(ContentType.Products);

		if (!response) return [];

        return response.map((item) => item.fields.slug);
	};
}