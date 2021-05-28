import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import styled from "@emotion/styled";
import { Backdrop } from "./Backdrop";
import { breakpoint } from "../../../../styles/theme/responsive/breakpoints";
import { ZIndex } from "../../../../styles/globals/ZIndex";
import { ICartModalContentViewModel } from "./ModalViewModel";

export interface IModalProps {
    viewModel: ICartModalContentViewModel;
    children?: ReactNode;
}

export function Modal({ children, viewModel }: IModalProps) {
    
    if (typeof window === 'undefined'){
        return null
    }

    return ReactDOM.createPortal(
        <>
            <Backdrop viewModel={viewModel.backdropViewModel} />
            <StyledModal aria-label="Modal" isVisible={viewModel.isCartVisible}>
                {children}
            </StyledModal>
        </>,
        document.getElementById('modal-root')
    )
}

const StyledModal = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${ZIndex.modal};
    background-color: var(--white);
    width: 50%;
    padding: 16px;
    transition: opacity 0.3s ease-out;
    border-radius: 3px;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;

    ${(props) => props.isVisible && `opacity: 1; pointer-events: initial;`}
    ${breakpoint.xl} {
        width: 60%;
    }
    
    ${breakpoint.l} {
        width: 70%;
    }
    
    ${breakpoint.m} {
        width: 80%;
    }

    ${breakpoint.s} {
        width: 95%;
    }
`;
