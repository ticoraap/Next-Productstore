import { AxiosResponse } from "axios";
import { IProduct } from "../models/product";

export interface IHttpClient {
    get<T = unknown>(url: string): Promise<IProduct>
    getAll<T = unknown>(url: string): Promise<IProduct[]>;
    getAllIds<T = unknown>(url: string): Promise<string[]>
    add<T = unknown>(url: String, data: IProduct): Promise<T>;
}
