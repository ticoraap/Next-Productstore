import styled from "@emotion/styled";
import React from "react";
import { ICartProduct } from "../domain/model/cartProduct";

import { CartProduct } from "./CartProduct";
import { observer } from "mobx-react-lite";
import { toCurrency } from "../../../utils/toCurrency";
import { useCartStore } from "../store/useCartStore";

export const Cart = observer(() => {
    const cartStore = useCartStore();

    return (
        <StyledCart>
            <StyledTitle>Shopping cart</StyledTitle>
            {cartStore.products.map((product: ICartProduct) => (
                <CartProduct
                    key={product.id}
                    product={product}
                    incrementAmount={() => cartStore.incrementAmount(product)}
                    decrementAmount={() => cartStore.decrementAmount(product)}
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
                    {toCurrency(cartStore.totalAmount)}
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
