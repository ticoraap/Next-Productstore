import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IRegion } from "../../../region/domain/model/IRegion";
import { ICountry } from "../model/ICountry";

export function createGetCountryRegions(contentApi: IContentApi) {
    return async function getCountryRegions(country: ICountry): Promise<IRegion[]> {
		const response = await contentApi.getEntriesByTypeThatLinkToEntry(country.id, ContentType.Regions);

		if (!response) return [];

        return response.map((region) => {
            
			return {
				id: region.sys.id,
                regionName: region.fields.regionName,
                regionCode: region.fields.regionCode,
                slug: region.fields.slug,
			}
		});
	};
}