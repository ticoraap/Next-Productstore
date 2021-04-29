import { IProduct } from "../models/product";
import { IHttpClient } from "./IHttpClient";

export function productApi(http: IHttpClient) {
    function get(productId) {
        return http.get<IProduct[]>(`products/${productId}`);
    }
    
    function getAll() {
        return http.getAll<IProduct[]>("products");
    }

    function getAllIds() {
        return http.getAllIds<string[]>("products");
    }

    function add(product: IProduct) {
        return http.add("products", product);
    }

    return Object.freeze({ get, getAllIds, getAll, add });
}
