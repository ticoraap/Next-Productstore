import { ICategoryPathSlugs } from "./ICategoryPathSlugs";

export interface IProductPathSlugs extends ICategoryPathSlugs {
    product: string,
}