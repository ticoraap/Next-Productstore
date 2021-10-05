import { IProduct } from "../../../products/product/domain/model/IProduct";

export interface ICartProduct extends IProduct {
    amount: number;
}
