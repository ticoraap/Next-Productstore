import { contentApi } from "../../../../contentful";
import { createGetCategory } from "./getCategory";
import { createGetCategoryPathSlugs } from "./getCategoryPathSlugs";
import { createGetCategoryProducts } from "./getCategoryProducts"

export const getCategory = createGetCategory(contentApi)
export const getCategoryProducts = createGetCategoryProducts(contentApi)
export const getCategoryPathSlugs = createGetCategoryPathSlugs(contentApi)