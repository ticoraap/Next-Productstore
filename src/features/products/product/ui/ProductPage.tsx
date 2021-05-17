import React from 'react';
import styled from "@emotion/styled";

import { MainLayout } from "../../../app-container/ui/layouts/main-layout/MainLayout";
import { IProductViewModel } from './ProductViewModel';
import { useState } from 'react';
import useCartStore from '../../../../store/useCartStore';
import { breakpoint } from '../../../../styles/theme/responsive/breakpoints';

export interface IProductPageProps {
    viewModel: IProductViewModel
}

export const ProductPage = ({viewModel}: IProductPageProps) => {
    const [amount, setAmount] = useState(1);
    const cartStore = useCartStore();

    const onAddToCartClick = () => {
        cartStore.addProduct(viewModel.product, amount)
    }

    return (
        <MainLayout>
            <StyledProductPreview>
                <StyledProductTitle>{viewModel.title}</StyledProductTitle>
                <StyledProductSubtitle>
                    {viewModel.subtitle}
                </StyledProductSubtitle>
                <StyledProductBody>
                    <StyledImageAndDescription>
                        <StyledProductImage src={viewModel.imageUrl} alt={viewModel.imageAltText}/>
                        <StyledProductDescription>
                            {viewModel.description}
                        </StyledProductDescription>
                    </StyledImageAndDescription>
                    <StyledPriceAndControls>
                        <StyledPrice>{viewModel.formattedPrice}</StyledPrice>
                        <StyledControls>
                            <StyledMinButton onClick={() => setAmount( amount > 1 ? amount -1 : 1)}>-</StyledMinButton>
                            <StyledAmount>{amount}</StyledAmount>
                            <StyledPlusButton onClick={() => setAmount(amount +1)}>+</StyledPlusButton>
                            <StyledAddToCartButton onClick={onAddToCartClick}>Add to cart</StyledAddToCartButton>
                        </StyledControls>
                    </StyledPriceAndControls>
                </StyledProductBody>
            </StyledProductPreview>
        </MainLayout>
    )
}

const StyledProductPreview = styled.div`

    ${breakpoint.s} {
        padding: 40px 0px 20px 0px;
    }

    padding: 80px 30px 40px 30px;
    max-width: 1400px;
    margin: auto;
`;

const StyledProductTitle = styled.h1`
    font-size: 60px;
`;

const StyledProductSubtitle = styled.div`
    font-size: 40px;
    margin-bottom: 30px;
`;

const StyledImageAndDescription = styled.div`

`;

const StyledProductBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledProductImage = styled.img`
    max-width: 460px;
    object-fit: cover;   
    border-radius: 3px;
`;

const StyledProductDescription = styled.p`
    margin: 10px 0;
    font-size: 30px;
    max-width: 460px;
`;

const StyledPriceAndControls = styled.div`
    margin: 30px;
    
`;

const StyledPrice = styled.div`
    font-size: 30px;
    margin: 0 0 20px 0;
`;

const StyledControls = styled.div`
    display: flex;
`;

const StyledMinButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: var(--grey-lighter);
    font-size: 24px;
`;

const StyledPlusButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: var(--grey-lighter);
    font-size: 24px;
`;

const StyledAmount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: var(--grey-lighter);
    height: 50px;
    width: 50px;
    padding: 0 4px;
    font-size: 24px;
`;

const StyledAddToCartButton = styled.button`
    height: 50px;
    width: 150px;
    background-color: var(--grey-lighter);
    font-size: 20px;
    margin-left: 30px;
`;