import { httpClient } from "./httpClient";
import { productApi } from "./product";

function createApi() {
    return Object.freeze({
        product: productApi(httpClient),
    });
}

export const Api = createApi();
