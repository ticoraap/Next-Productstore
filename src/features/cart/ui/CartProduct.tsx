import React from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { ICartProductViewModel } from "./CartProductViewModel";

export interface ICartProductProps {
    viewModel: ICartProductViewModel;

}

export const CartProduct = observer(({ viewModel }: ICartProductProps) => {
        return (
            <StyledCartProduct>
                <StyledImage
                    alt={viewModel.altImageText}
                    src={viewModel.imgurl}
                />
                <StyledInfo>
                    <StyledTitle>{viewModel.title}</StyledTitle>
                    <StyledSubTitle>{viewModel.subtitle}</StyledSubTitle>
                </StyledInfo>
                <StyledControls>
                    <StyledButton onClick={viewModel.decrementProductAmount}>-</StyledButton>
                    <StyledAmount>{viewModel.productAmount}</StyledAmount>
                    <StyledButton onClick={viewModel.incrementProductAmount}>+</StyledButton>
                </StyledControls>
                <StyledPricing>
                    {viewModel.formattedProductTotalPrice}
                </StyledPricing>
            </StyledCartProduct>
        );
    }
);

const StyledCartProduct = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    background-color: var(--white);
    padding: 10px;
    border-width: 1px 0 0 0;
    border-color: var(--grey);
    border-style: solid;
`;

const StyledImage = styled.img`
    width: 115px;
    height: 65px;
    border-radius: 3px;
    flex-shrink: 0;
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 4px;
`;

const StyledSubTitle = styled.p`
    font-size: 16px;
    margin: 4px;
`;

const StyledControls = styled.div`
    display: flex;
`;

const StyledAmount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: var(--grey-lighter);
    border: 1px solid var(--grey);
    height: 30px;
    width: 30px;
    padding: 0 4px;
`;

const StyledButton = styled.button`
    height: 30px;
    width: 30px;
`;

const StyledPricing = styled.div`
    width: 80px;
`;
