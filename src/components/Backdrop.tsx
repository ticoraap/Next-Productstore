import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { ZIndex } from "../styles/globals/ZIndex";

export interface IBackdropProps {
    isVisible: boolean;
    onBackdropClick: MouseEventHandler<HTMLDivElement>;
}

export function Backdrop({ isVisible, onBackdropClick }: IBackdropProps) {
    return (
        <StyledBackdrop
            aria-label="Backdrop"
            isVisible={isVisible}
            onClick={onBackdropClick}
        />
    );
}

const StyledBackdrop = styled.div<{ isVisible: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: ${ZIndex.modalBackdrop};
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-out;
    cursor: pointer;

    ${(props) => props.isVisible && `opacity: 1; pointer-events: initial;`}
`;
