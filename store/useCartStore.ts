import { createContext, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { ICartProduct } from "../models/cartProduct";
import { IProduct } from "../models/product";

function createStore() {
    return makeAutoObservable({
        products: getPersistedStorage(),
        get cartCount() {
            return this.products.reduce(
                (total, product) => total + product.amount,
                0
            );
        },
        get totalAmount() {
            return this.products.reduce(
                (total: number, product: ICartProduct) =>
                    total + product.amount * product.price,
                0
            );
        },
        isInCart(id: number) {
            return !!this.products.find((cartProduct) => cartProduct.id === id);
        },
        removeProduct(id: number) {
            const cartProductIndex = this.products.findIndex(
                (cartProduct) => cartProduct.id === id
            );
            this.products.splice(cartProductIndex, 1);
            setPersistedStorage(this.products);
        },
        addProduct(product: IProduct) {
            if (this.isInCart(product.id)) {
                this.incrementAmount(product);
                return;
            }
            this.products.push({
                ...product,
                amount: 1,
            });
            setPersistedStorage(this.products);
        },
        incrementAmount({ id }: ICartProduct) {
            const cartProductIndex = this.products.findIndex(
                (cartProduct) => cartProduct.id === id
            );
            this.products[cartProductIndex].amount += 1;
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

function getPersistedStorage() {
    if (!process.browser) return [];

    const storage = localStorage.getItem("cart");
    if (storage) return JSON.parse(storage) as ICartProduct[];

    return [];
}

function setPersistedStorage(cart: ICartProduct[]) {
    if (!process.browser) return;
    localStorage.setItem("cart", JSON.stringify(cart));
}

const cartStore = createStore();
const CartStoreContext = createContext(cartStore);

export default () => useContext(CartStoreContext);
