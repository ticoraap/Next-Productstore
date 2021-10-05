import { ICountryPathSlugs } from "./ICountryPathSlugs";

export interface IRegionPathSlugs extends ICountryPathSlugs{
    region: string;
}