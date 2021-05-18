import React from "react";
import styled from "@emotion/styled";

import { OverviewProduct } from "./OverviewProduct/OverviewProduct";
import { MainLayout } from "../../../app-container/ui/layouts/main-layout/MainLayout";
import { breakpoint } from "../../../../styles/theme/responsive/breakpoints";
import { IProductsOverviewViewModel } from "./ProductsOverviewViewModel";
import { useCartStore } from "../../../cart/store/useCartStore";

export interface IProductsOverviewPageProps {
    viewModel: IProductsOverviewViewModel
}

export const ProductsOverviewPage = ({ viewModel }: IProductsOverviewPageProps) => {
    const cartStore = useCartStore();
    return (
        <MainLayout>
            <Title>{viewModel.productsTitle}</Title>
            <Products>
                {viewModel.productViewModels.map((productViewModel) => (
                    <OverviewProduct
                        key={productViewModel.slug}
                        viewModel={productViewModel}
                        onAddToCartClick={() =>
                            cartStore.addProduct(productViewModel.product)
                        }
                    />
                ))}
            </Products>
        </MainLayout>
    );
};

const Title = styled.h1`
    margin: 70px 0 40px;
`;

const Products = styled.section`
    display: grid;
    grid-gap: 34px;
    grid-template-columns: repeat(4, 1fr);

    ${breakpoint.xl} {
        grid-template-columns: repeat(3, 1fr);
    }

    ${breakpoint.m} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${breakpoint.s} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
