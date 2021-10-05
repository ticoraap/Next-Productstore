import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IRegion } from "../model/IRegion";


export function createGetRegion(contentApi: IContentApi) {
    return function getRegion(slug: string): Promise<IRegion> {
		return contentApi.getEntryBySlug(slug, ContentType.Regions).then((item: any) => {
            return {
                id: item.sys.id,
                regionName: item.fields.regionName,
                regionCode: item.fields.regionCode,
                slug: item.fields.slug,
            };
        })
	};
}