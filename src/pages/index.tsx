import React from "react";
import { ProductsOverviewPage } from "../features/products/products-overview/ui/ProductsOverviewPage";
import { createProductsOverviewViewModel } from "../features/products/products-overview/ui/ProductsOverviewViewModel";
import { getProducts } from "../features/products/products-overview/domain/use-cases";
import { cartStore } from "../features/cart/store/CartStore";
import { MainLayout } from "../features/app-container/ui/layouts/main-layout/MainLayout";

export default function Index({ products, mainLayoutViewModel }) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <ProductsOverviewPage
                viewModel={createProductsOverviewViewModel(products, cartStore)}
            />

        </MainLayout>
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
