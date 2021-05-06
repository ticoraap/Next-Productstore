import Link from "next/link";
import React, { MouseEvent } from "react";
import styled from "@emotion/styled";
import { IProduct } from "../models/product";
import { toCurrency } from "../utility/toCurrency";

export interface IProductProps {
    product: IProduct;
    onAddToCartClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Product({ product, onAddToCartClick }: IProductProps) {
    return (
        <StyledProduct>
            <Link href={"/product/" + product.slug}>
                <StyledPicture
                    alt={`Image of ${product.title}`}
                    src={product.imgurl}
                />
            </Link>

            <StyledAside>
                <StyledProductInfo>
                    <StyledTitle>{product.title}</StyledTitle>
                    <StyledSubtitle>{product.subtitle}</StyledSubtitle>
                </StyledProductInfo>
                <StyledPriceButton>
                    <StyledPrice>{toCurrency(product.price)}</StyledPrice>
                    <StyledAddButon onClick={onAddToCartClick}>
                        ADD
                    </StyledAddButon>
                </StyledPriceButton>
            </StyledAside>
        </StyledProduct>
    );
}

const StyledProduct = styled.article`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
`;

const StyledAside = styled.div`
    display: flex;
    padding: 12px 20px 12px 12px;
`;

const StyledProductInfo = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const StyledAddButon = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    font-weight: bold;
    background: transparent;
`;

const StyledPicture = styled.img`
    width: 100%;
    cursor: pointer;
`;

const StyledTitle = styled.strong`
    font-size: 20px;
    font-weight: normal;
`;

const StyledSubtitle = styled.strong`
    font-size: 16px;
    font-weight: normal;
`;

const StyledPriceButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledPrice = styled.span`
    padding-top: 8px;
    color: var(--price);
`;
