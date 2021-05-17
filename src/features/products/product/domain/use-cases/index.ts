import { contentApi } from "../../../../shared/data/contentful";
import { createGetProduct } from "./getProduct";
import { createGetProductsSlugs } from "./getProductsSlugs";

export const getProductsSlugs = createGetProductsSlugs(contentApi);
export const getProduct = createGetProduct(contentApi);