import React, { useState } from "react";
import Head from 'next/head'
import styled from "@emotion/styled";
import { Header } from "../../../../app-container/ui/header/Header";
import useCartStore from "../../../../../store/useCartStore";
import { Modal } from "../../modal/Modal";
import { Cart } from "../../../../cart/ui/Cart";
import { observer } from "mobx-react-lite";
import { breakpoint } from "../../../../../styles/theme/responsive/breakpoints";

export const MainLayout = observer(({ children }) => {
    const [isCartVisible, setCartVisible] = useState(false);
    const cart = useCartStore();
    return (
        <StyledMainLayout>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <Header
                onCartClick={() => {
                    setCartVisible(true);
                }}
                cartCount={cart.cartCount}
            ></Header>
            <Modal
                isVisible={isCartVisible}
                onBackdropClick={() => setCartVisible(false)}
            >
                <Cart />
            </Modal>
            <StyledMain>{children}</StyledMain>
        </StyledMainLayout>
    );
});

const StyledMainLayout = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: var(--grey-darker);
    background: var(--grey);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const StyledMain = styled.main`

    ${breakpoint.s} {
        padding: 0 10px 20px 10px;
    }

    padding: 0 30px 40px 30px;
    flex-grow: 1;
    max-width: 1400px;
    margin: auto;
`;
