import React from "react";
import { ProductsOverviewPage } from "../features/products/products-overview/ui/ProductsOverviewPage";
import { createProductsOverviewViewModel } from "../features/products/products-overview/ui/ProductsOverviewViewModel";
import { getProducts } from "../features/products/products-overview/domain/use-cases";
import { cartStore } from "../features/cart/store/CartStore";

export default function Index({ products }) {
    return (
        <ProductsOverviewPage
            viewModel={createProductsOverviewViewModel(products, cartStore)}
        />
    );
}

export async function getStaticProps() {
    const products = await getProducts();

    return {
        props: {
            products,
        },
    };
}
