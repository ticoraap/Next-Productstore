import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { breakpoint } from "../styles/theme/responsive/breakpoints";
import { Product } from "../components/Product";
import useCartStore from "../store/useCartStore";
import { Api } from "../api";

export default function Index(props) {
    const cartStore = useCartStore();

    return (
        <Main>
            <Title>{props.products.length} Products</Title>
            <Products>
                {props.products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onAddToCartClick={() => cartStore.addProduct(product)}
                    />
                ))}
            </Products>
        </Main>
    );
}

export async function getStaticProps() {
    const products = await Api.product.getAll();

    return {
        props: {
            products,
        },
    };
}

const Main = styled.main`
    padding: 0 30px 40px 30px;
    flex-grow: 1;
    max-width: 1400px;
    margin: auto;
`;

const Title = styled.h1`
    margin: 70px 0 40px;
`;

const Products = styled.section`
    display: grid;
    grid-gap: 34px;
    grid-template-columns: repeat(4, 1fr);

    ${breakpoint.xl} {
        grid-template-columns: repeat(3, 1fr);
    }

    ${breakpoint.m} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${breakpoint.s} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
