import axios from "axios";

export function createHttpClient(baseUrl: string) {
    function get(url: string) {
        return axios.get(`${baseUrl}/${url}`).then((response) => response.data);
    }

    return Object.freeze({ get });
}

export const httpClient = createHttpClient(
    "https://assingments-8968c-default-rtdb.europe-west1.firebasedatabase.app/"
);
