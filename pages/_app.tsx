import React, { useState, ReactNode } from "react";
import styled from "@emotion/styled";
import { AppProps } from "next/app";

import "../styles/globals.css";
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { Modal } from "../components/Modal";
import useCartStore from "../store/useCartStore";
import { observer } from "mobx-react-lite";

export interface IAppProps {
    Component: ReactNode | any;
    pageProps: AppProps;
}

export default observer(({ Component, pageProps }: IAppProps) => {
    const [isCartVisible, setCartVisible] = useState(false);
    const cart = useCartStore();

    return (
        <StyledApp>
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
            <Component {...pageProps} />
        </StyledApp>
    );
});

const StyledApp = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: var(--grey-darker);
    background: var(--grey);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
