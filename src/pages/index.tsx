import React from "react";
import { ProductsOverviewPage } from "../features/products/products-overview/ui/ProductsOverviewPage";
import { createProductsOverviewViewModel } from "../features/products/products-overview/ui/ProductsOverviewViewModel";
import { getProducts } from "../features/products/products-overview/domain/use-cases";

export default function Index({ products, ...rest }) {
    return (
        <ProductsOverviewPage
            viewModel={createProductsOverviewViewModel(products)}
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
