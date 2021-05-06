import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { breakpoint } from "../utility/breakpoint";
import { Product } from "../components/Product";
import useCartStore from "../store/useCartStore";
import { contentApi } from "../features/shared/data/contentful";
import { ContentType } from "../features/shared/data/contentful/constants/ContentType";

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
    const items = await contentApi.getEntriesByType(ContentType.Products);

    const products = items.map((item: any) => {
        return {
            title: item.fields.title,
            subtitle: item.fields.subtitle,
            description: item.fields.description,
            price: item.fields.price,
            imgurl: item.fields.imgurl,
            slug: item.fields.slug,
        };
    });

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

    ${breakpoint.md} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${breakpoint.sm} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
