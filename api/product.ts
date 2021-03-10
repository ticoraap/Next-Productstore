import { IProduct } from "../models/product";
import { IHttpClient } from "./IHttpClient";

export function productApi(http: IHttpClient) {
    function getAll() {
        return http.get<IProduct[]>("products.json");
    }

    return Object.freeze({ getAll });
}
