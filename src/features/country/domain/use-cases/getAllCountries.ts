import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICountry } from "../model/ICountry";

export function createGetAllCountries(contentApi: IContentApi) {
    return function GetAllCountries(): Promise<ICountry[]> {
		return contentApi.getEntriesByType(ContentType.Countries).then((countries: any) => {
            if (!countries) return [];

            return countries.map(country => {
                return {
                    id: country.sys.id,
                    countryCode: country.fields.countryCode,
                    name: country.fields.name,
                    slug: country.fields.slug,
                } as ICountry
            })
        })
	};
}