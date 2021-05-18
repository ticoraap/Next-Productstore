import React, { ReactNode, useState } from "react";
import Head from 'next/head'
import styled from "@emotion/styled";
import { Header } from "../../../../app-container/ui/header/Header";
import { Modal } from "../../modal/Modal";
import { Cart } from "../../../../cart/ui/Cart";
import { observer } from "mobx-react-lite";
import { breakpoint } from "../../../../../styles/theme/responsive/breakpoints";
import { useCartStore } from "../../../../cart/store/useCartStore";
import { createHeaderViewModel } from "../../header/HeaderViewModel";
import { createModalViewModel } from "../../modal/ModalViewModel";

export interface IMainLayoutProps{
    children: ReactNode
}

export const MainLayout = observer(({ children }: IMainLayoutProps) => {
    const [isCartVisible, setCartVisible] = useState(false);
    const cart = useCartStore();
    
    const onCartClick = () => {
        setCartVisible(true)
    }
    
    const onCartHidden = () => {
        setCartVisible(false)
    }

    return (
        <StyledMainLayout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header viewModel={createHeaderViewModel({cart, onCartClick})}/>
            <Modal viewModel={createModalViewModel({isCartVisible, onCartHidden})}>
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
