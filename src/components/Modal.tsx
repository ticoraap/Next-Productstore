import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { Backdrop } from "./Backdrop";
import { breakpoint } from "../styles/theme/responsive/breakpoints";

export interface IModalProps {
    children: React.ReactNode;
    isVisible: boolean;
    onBackdropClick: MouseEventHandler<HTMLDivElement>;
}

export function Modal({ children, isVisible, onBackdropClick }: IModalProps) {
    return (
        <>
            <Backdrop isVisible={isVisible} onBackdropClick={onBackdropClick} />
            <StyledModal aria-label="Modal" isVisible={isVisible}>
                {children}
            </StyledModal>
        </>
    );
}

const StyledModal = styled.div<{ isVisible: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1300;
    background-color: var(--white);
    width: 50%;
    padding: 16px;
    transition: opacity 0.3s ease-out;
    border-radius: 3px;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;

    ${(props) => props.isVisible && `opacity: 1; pointer-events: initial;`}

    ${breakpoint.s} {
        width: 90%;
    }

    ${breakpoint.m} {
        width: 75%;
    }

    ${breakpoint.xl} {
        width: 60%;
    }
`;
