import { contentApi } from "../../../../contentful";
import { createGetAllCountries } from "./getAllCountries";
import { createGetCountry } from "./getCountry";
import { createGetCountryRegions } from "./getCountryRegions";
import { createGetCountrySlugs } from "./getCountrySlugs";

export const getCountrySlugs = createGetCountrySlugs(contentApi);
export const getCountryRegions = createGetCountryRegions(contentApi);
export const getCountry = createGetCountry(contentApi);
export const getAllCountries = createGetAllCountries(contentApi)