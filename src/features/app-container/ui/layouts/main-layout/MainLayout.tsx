import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { Header } from "../../../../app-container/ui/header/Header";
import { Modal } from "../../modal/Modal";
import { Cart } from "../../../../cart/ui/Cart";
import { observer } from "mobx-react-lite";
import { breakpoint } from "../../../../../styles/theme/responsive/breakpoints";
import { IMainLayoutViewModel } from "./MainLayoutViewModel";

export interface IMainLayoutProps{
    viewModel: IMainLayoutViewModel
    children: ReactNode
}

export const MainLayout = observer(({ viewModel, children }: IMainLayoutProps) => {
    return (
        <StyledMainLayout>
            <Header viewModel={viewModel.headerViewModel}/>
            <Modal viewModel={viewModel.modalViewModel}>
                <Cart viewModel={viewModel.cartViewModel}/>
            </Modal>
            <StyledMain>{children}</StyledMain>
        </StyledMainLayout>
    );
});

const StyledMainLayout = styled.div`
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
