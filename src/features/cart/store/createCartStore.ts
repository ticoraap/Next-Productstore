import { makeAutoObservable } from "mobx";
import { ICartProduct } from "../domain/model/cartProduct";
import { IProduct } from "../../products/products-overview/domain/model/product";

export type ICartStore = ReturnType<typeof createCartStore>

export function createCartStore() {
    return makeAutoObservable({
        products: getPersistedStorage(),
        get cartCount(): number {
            return this.products.reduce(
                (total, product) => total + product.amount,
                0
            );
        },
        get totalAmount(): number {
            return this.products.reduce(
                (total: number, product: ICartProduct) =>
                    total + product.amount * product.price,
                0
            );
        },
        totalProductAmount(id: string): number {
            const product = this.products.find((cartProduct) => cartProduct.id === id)
            return product.amount * product.price;
        },
        isInCart(id: string) {
            return !!this.products.find((cartProduct) => cartProduct.id === id);
        },
        removeProduct(id: string) {
            const cartProductIndex = this.products.findIndex(
                (cartProduct) => cartProduct.id === id
            );
            this.products.splice(cartProductIndex, 1);
            setPersistedStorage(this.products);
        },
        addProduct(product: IProduct, amount = 1) {
            if (this.isInCart(product.id)) {
                this.incrementAmount(product, amount);
                return;
            }
            this.products.push({
                ...product,
                amount,
            });
            setPersistedStorage(this.products);
        },
        incrementAmount({ id }: ICartProduct, amount = 1) {
            const cartProductIndex = this.products.findIndex(
                (cartProduct) => cartProduct.id === id
            );
            this.products[cartProductIndex].amount += amount;
            setPersistedStorage(this.products);
        },
        decrementAmount({ id }: ICartProduct) {
            const cartProductIndex = this.products.findIndex(
                (cartProduct) => cartProduct.id === id
            );
            this.products[cartProductIndex].amount -= 1;

            if (this.products[cartProductIndex].amount === 0)
                this.removeProduct(id);
            setPersistedStorage(this.products);
        },
    });
}

function getPersistedStorage(): ICartProduct[] {
    if (!process.browser) return [];

    const storage = localStorage.getItem("cart");
    if (storage) return JSON.parse(storage) as ICartProduct[];

    return [];
}

function setPersistedStorage(cart: ICartProduct[]) {
    if (!process.browser) return;
    localStorage.setItem("cart", JSON.stringify(cart));
}


