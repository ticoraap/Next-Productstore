import { AxiosResponse } from "axios";

export interface IHttpClient {
    get<T = unknown>(url: string): Promise<T>;
}
