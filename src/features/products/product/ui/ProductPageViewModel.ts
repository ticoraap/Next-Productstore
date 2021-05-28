import { Dispatch, SetStateAction } from "react"
import { toEuroFormat } from "../../../../utils/CurrencyFormat";
import { ICartStore } from "../../../cart/store/createCartStore";
import { IProduct } from "../../products-overview/domain/model/product";

export type IProductPageViewModel = ReturnType<typeof createProductPageViewModel>

export interface IProductPageViewModelProps {
    product: IProduct;
    cartStore: ICartStore;
    productCount: number
    setProductCount: Dispatch<SetStateAction<number>>;
}

export function createProductPageViewModel({product, cartStore, productCount, setProductCount}: IProductPageViewModelProps) {
    return {
        title: product.title,
        subtitle: product.subtitle,
        description: product.description,
        imageUrl: product.imgurl,
        imageAltText: `Image of ${product.title}`,
        formattedPrice: toEuroFormat(product.price),
        productCount,
        onIncrement: () => setProductCount(productCount +1),
        onDecrement: () => setProductCount(productCount > 1 ? productCount -1 : 1),
        onAddToCart: () => cartStore.addProduct(product, productCount),
        onResetCount: () => setProductCount(1)
    };
}