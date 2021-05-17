import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";

export interface IHeaderProps {
    cartCount: number;
    onCartClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Header = observer(({ cartCount, onCartClick }: IHeaderProps) => {
    const router = useRouter();

    return (
        <StyledHeader>
            <Link href="/">
                <StyledLink>
                    <StyledLogo
                        alt="M2mobi logo"
                        src="/images/logo-desktop.svg"
                    />
                </StyledLink>
            </Link>
            <StyledMenuItems>
                {/* <Link href="/new">
                    <StyledLink active={router.pathname == "/new"}>
                        new
                    </StyledLink>
                </Link> */}
            </StyledMenuItems>
            <StyledCartButton aria-label="Cart button" onClick={onCartClick}>
                <StyledCartSvg src="/icons/shoppingcart.svg" />
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

const StyledMenuItems = styled.div`
    margin-right: auto;
`;

const StyledLink = styled.a<{ active?: boolean }>`
    margin-right: auto;
    cursor: pointer;
    font-size: 20px;
    ${(props) => props.active && `border-bottom: 2px solid;`}
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
