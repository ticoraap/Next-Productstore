import React from "react";
import { MainLayout } from "../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { cartStore } from "../../features/cart/store/CartStore";
import { getProduct, getProductsSlugs } from "../../features/products/product/domain/use-cases";
import { ProductPage } from '../../features/products/product/ui/ProductPage'
import { createProductPageViewModel } from '../../features/products/product/ui/ProductPageViewModel'
import { IProduct } from "../../features/products/products-overview/domain/model/product";

export interface IProductNextPageProps {
    product: IProduct;
    mainLayoutViewModel: IMainLayoutViewModel;
}

export default function Index({product, mainLayoutViewModel}: IProductNextPageProps) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <ProductPage viewModel={createProductPageViewModel({
                product, 
                cartStore, 
                productCount: mainLayoutViewModel.productCount,
                setProductCount: mainLayoutViewModel.setProductCount
                })} />
        </MainLayout>
    );
}

export async function getStaticPaths() {
    const slugs = await getProductsSlugs();

    return {
        fallback: false,
        paths: slugs.map((slug) => {
            return {
                params: {
                    productId: slug,
                },
            };
        }),
    };
}

export async function getStaticProps(context) {
    const slug = context.params.productId;
    if (!slug) return;

    const product = await getProduct(slug)
    return {
        props: {
            product,
        },
    };
}
