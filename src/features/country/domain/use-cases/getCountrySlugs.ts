import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICountryPathSlugs } from "../../../shared/domain/ICountryPathSlugs";

export function createGetCountrySlugs(contentApi: IContentApi) {
    return async function getCountrySlugs(): Promise<ICountryPathSlugs[]> {
		const response = await contentApi.getEntriesByType(ContentType.Countries);

		if (!response) return [];

        return response.map((item) => {
			return {
				country: item.fields.slug
			}
		});
	};
}