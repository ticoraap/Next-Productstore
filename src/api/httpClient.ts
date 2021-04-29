import axios from "axios";
import { IProduct } from "../models/product";

export function createHttpClient(baseUrl: string) {

    function getAllIds(url: string){
        return axios.get(`${baseUrl}/${url}.json`).then((response) => {
            return Object.keys(response.data)
        });
    }

    function get(url: string) {
        return axios.get(`${baseUrl}/${url}.json`).then((response) => {
            return response.data;
        });
    }

    function getAll(url: string) {
        return axios.get(`${baseUrl}/${url}.json`).then((response) => {
            const array = [];
            Object.keys(response.data).forEach((key) => {
                array.push({
                    ...response.data[key],
                    id: key,
                });
            });

            return array;
        });
    }

    function add(url: string, product: IProduct) {
        return axios
            .post(`${baseUrl}/${url}.json`, product)
            .then((response) => response.data);
    }

    return Object.freeze({ get, getAllIds, getAll, add });
}

export const httpClient = createHttpClient(
    "https://assingments-8968c-default-rtdb.europe-west1.firebasedatabase.app"
);
