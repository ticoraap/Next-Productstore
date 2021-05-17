import { contentApi } from "../../../../shared/data/contentful";
import { createGetProducts } from "./getProducts";

export const getProducts = createGetProducts(contentApi);