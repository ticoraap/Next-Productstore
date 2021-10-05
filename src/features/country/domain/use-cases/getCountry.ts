import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICountry } from "../model/ICountry";

export function createGetCountry(contentApi: IContentApi) {
    return function getCountry(slug: string): Promise<ICountry> {
		return contentApi.getEntryBySlug(slug, ContentType.Countries).then((item: any) => {
            return {
                id: item.sys.id,
                countryCode: item.fields.countryCode,
                name: item.fields.name,
                slug: item.fields.slug,
            };
        })
	};
}