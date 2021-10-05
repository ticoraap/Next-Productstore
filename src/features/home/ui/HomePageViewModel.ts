
import { ICountry } from "../../country/domain/model/ICountry";
import { IRegion } from "../../region/domain/model/IRegion";


export type IHomePageViewModel = ReturnType<typeof createHomePageViewModel>

export interface IHomePageViewModelProps {
    countries: ICountry[];

}

export function createHomePageViewModel({countries}: IHomePageViewModelProps) {
    return {
        textLinks: countries.map(country => {
            return {
                pathSlugs: {
                    country: country.slug
                },
                linkText: country.name
            }
        })
    };
}