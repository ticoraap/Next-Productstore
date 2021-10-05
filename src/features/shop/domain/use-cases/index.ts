import { contentApi } from "../../../../contentful";
import { createGetShop } from "./getShop";
import { createGetShopCategories } from "./getShopCategories";
import { createGetShopPathSlugs } from "./getShopPathSlugs";

export const getShopPathSlugs = createGetShopPathSlugs(contentApi)
export const getShopCategories = createGetShopCategories(contentApi)
export const getShop = createGetShop(contentApi)