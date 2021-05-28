import React from "react";
import styled from "@emotion/styled";

import { OverviewProduct } from "./OverviewProduct/OverviewProduct";
import { breakpoint } from "../../../../styles/theme/responsive/breakpoints";
import { IProductsOverviewViewModel } from "./ProductsOverviewViewModel";

export interface IProductsOverviewPageProps {
    viewModel: IProductsOverviewViewModel
}

export const ProductsOverviewPage = ({ viewModel }: IProductsOverviewPageProps) => {
    return (
        <> 
            <Title>{viewModel.productsTitle}</Title>
            <Products>
                {viewModel.overviewProductViewModels.map((overviewProductViewModel) => (
                    <OverviewProduct
                        key={overviewProductViewModel.key}
                        viewModel={overviewProductViewModel}
                    />
                ))}
            </Products>
        </>
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
