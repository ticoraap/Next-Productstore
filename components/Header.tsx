import React, { useState, MouseEvent } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

export interface IHeaderProps {
    cartCount: number;
    onCartClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Header = observer(({ cartCount, onCartClick }: IHeaderProps) => {
    return (
        <StyledHeader>
            <StyledLogo alt="M2mobi logo" src="images/logo-desktop.svg" />
            <StyledCartButton aria-label="Cart button" onClick={onCartClick}>
                <StyledCartSvg src="icons/shoppingcart.svg" />
                <StyledCartAmount>{cartCount}</StyledCartAmount>
            </StyledCartButton>
        </StyledHeader>
    );
});

const StyledHeader = styled.header`
    height: 84px;
    padding: 0 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    background-color: var(--dark);
    color: var(--white);
`;

const StyledLogo = styled.img`
    height: 48px;
    margin-right: auto;
`;

const StyledCartButton = styled.button`
    background: transparent;
    margin-top: 36px;
`;

const StyledCartAmount = styled.span`
    border-radius: 50%;
    background-color: var(--white);
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: -16px;
    top: -47px;
`;

const StyledCartSvg = styled.img`
    width: 30px;
`;
