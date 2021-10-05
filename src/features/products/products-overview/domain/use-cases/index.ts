import { contentApi } from "../../../../../contentful";
import { createGetProducts } from "./getProducts";

export const getProducts = createGetProducts(contentApi);