import { contentApi } from "../../../../../contentful";
import { createGetProductPathSlugs } from "./getProductPathSlugs";
import { createGetProduct } from "./getProduct";
import { createGetProductsSlugs } from "./getProductsSlugs";

export const getProductsSlugs = createGetProductsSlugs(contentApi);
export const getProductPathSlugs = createGetProductPathSlugs(contentApi);
export const getProduct = createGetProduct(contentApi);