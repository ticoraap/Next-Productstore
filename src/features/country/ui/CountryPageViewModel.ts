
import { IRegion } from "../../region/domain/model/IRegion";
import { ICountry } from "../domain/model/ICountry";

export type ICountryPageViewModel = ReturnType<typeof createCountryPageViewModel>

export interface ICountryPageViewModelProps {
    country: ICountry;
    regions: IRegion[];
}

export function createCountryPageViewModel({country, regions}: ICountryPageViewModelProps) {

    

    return {
        name: country.name,
        countryCode: country.countryCode,
        regions,
        textLinks: regions.map(region => {

            return {
                pathSlugs: {
                    country: country.slug,
                    region: region.slug
                },
                linkText: region.regionName
            }
        })
    };
}