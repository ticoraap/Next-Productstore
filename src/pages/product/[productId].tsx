import React from "react";
import styled from "@emotion/styled";
import { Api } from "../../api";

export default function Index(props) {
    return (
        <StyledProductPreview>
            <StyledProductTitle>{props.product.title}</StyledProductTitle>
            <StyledProductSubtitle>
                {props.product.subtitle}
            </StyledProductSubtitle>

            <StyledProductImage src={props.product.imgurl} />
            <StyledProductDescription>
                {props.product.description}
            </StyledProductDescription>
        </StyledProductPreview>
    );
}

export async function getStaticPaths() {
    const productIds = await Api.product.getAllIds();
    let paramsArray = [];
    paramsArray = productIds.map((productId) => {
        return {
            params: {
                productId,
            },
        };
    });
    return {
        fallback: false,
        paths: paramsArray,
    };
}

export async function getStaticProps(context) {
    const productId = context.params.productId;
    if (!productId) return;
    const product = await Api.product.get(productId);
    return {
        props: {
            product,
        },
    };
}

const StyledProductPreview = styled.div`
    padding: 0 30px 40px 30px;
    max-width: 1400px;
    margin: auto;
`;

const StyledProductTitle = styled.h1``;
const StyledProductSubtitle = styled.div``;

const StyledProductImage = styled.img``;
const StyledProductDescription = styled.p``;
