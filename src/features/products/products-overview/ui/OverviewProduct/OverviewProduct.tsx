import Link from "next/link";
import React, { MouseEvent } from "react";
import styled from "@emotion/styled";
import { IOverviewProductViewModel } from "./OverviewProductViewModel";

export interface IProductProps {
    viewModel: IOverviewProductViewModel;
}

export function OverviewProduct({ viewModel }: IProductProps) {
    return (
        <StyledProduct>
            <Link href={viewModel.productURL}>
                <StyledPicture
                    alt={viewModel.pictureAltText}
                    src={viewModel.pictureURL}
                />
            </Link>

            <StyledAside>
                <StyledProductInfo>
                    <StyledTitle>{viewModel.title}</StyledTitle>
                    <StyledSubtitle>{viewModel.subtitle}</StyledSubtitle>
                </StyledProductInfo>
                <StyledPriceButton>
                    <StyledPrice>{viewModel.formattedPrice}</StyledPrice>
                    <StyledAddButon onClick={viewModel.onClick}>
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
