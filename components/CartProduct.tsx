import React, { MouseEvent } from "react";
import styled from "@emotion/styled";
import { ICartProduct } from "../models/cartProduct";
import { observer } from "mobx-react-lite";
import { toCurrency } from "../utility/toCurrency";

export interface ICartProductProps {
    product: ICartProduct;
    incrementAmount: (event: MouseEvent<HTMLButtonElement>) => void;
    decrementAmount: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const CartProduct = observer(
    ({ product, incrementAmount, decrementAmount }: ICartProductProps) => {
        return (
            <StyledCartProduct>
                <StyledImage
                    alt={`Image of ${product.title}`}
                    src={product.imgurl}
                />
                <StyledInfo>
                    <StyledTitle>{product.title}</StyledTitle>
                    <StyledSubTitle>{product.subtitle}</StyledSubTitle>
                </StyledInfo>
                <StyledControls>
                    <StyledButton onClick={decrementAmount}>-</StyledButton>
                    <StyledAmount>{product.amount}</StyledAmount>
                    <StyledButton onClick={incrementAmount}>+</StyledButton>
                </StyledControls>
                <StyledPricing>
                    {toCurrency(product.price * product.amount)}
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
