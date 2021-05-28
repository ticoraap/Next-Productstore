import styled from "@emotion/styled";
import React from "react";

import { CartProduct } from "./CartProduct";
import { observer } from "mobx-react-lite";
import { cartStore } from "../store/CartStore";
import { ICartViewModel } from "./CartViewModel";

export interface ICartProps{
    viewModel: ICartViewModel
}

export const Cart = observer(({viewModel}: ICartProps) => {
    return (
        <StyledCart>
            <StyledTitle>Shopping cart</StyledTitle>
            {viewModel.cartProductViewModels.map(cartProductViewModel => (
                <CartProduct
                    key={cartProductViewModel.id}
                    viewModel={cartProductViewModel}
                />
            ))}
            <StyledOverview>
                <StyledTotalProducts>
                    Totaal artikelen
                    <StyledTotalNumber>
                        ({cartStore.cartCount})
                    </StyledTotalNumber>
                </StyledTotalProducts>
                <StyledTotalPrice>
                    {viewModel.formattedTotalAmount}
                </StyledTotalPrice>
            </StyledOverview>
        </StyledCart>
    );
});

const StyledCart = styled.div``;

const StyledTitle = styled.h1`
    margin-bottom: 20px;
`;

const StyledOverview = styled.div`
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s ease;
    background-color: var(--white);
    padding: 10px;
    border-width: 1px 0px 0px 0px;
    border-color: var(--grey);
    border-style: solid;
`;

const StyledTotalProducts = styled.div`
    padding-right: 30px;
`;
const StyledTotalNumber = styled.span`
    font-size: 12px;
    width: 0;
`;

const StyledTotalPrice = styled.div`
    width: 80px;
`;
