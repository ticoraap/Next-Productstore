import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IRegionPathSlugs } from "../../../shared/domain/IRegionPathSlugs";

export function createGetRegionPathSlugs(contentApi: IContentApi) {
	return async function getRegionPathSlugs(): Promise<IRegionPathSlugs[]> {
        const products = await contentApi.getEntriesByType(ContentType.Regions, { include: 2});
        return products.flatMap(region => {
            if (!region.fields?.country) return []
            
            return {
                region: region.fields.slug,
                country: region.fields.country.fields.slug,
            }
        })
	};
}
