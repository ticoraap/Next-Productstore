import { IProduct } from "../../../products/products-overview/domain/model/product";

export interface ICartProduct extends IProduct {
    amount: number;
}
