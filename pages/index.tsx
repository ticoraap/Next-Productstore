import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { breakpoint } from "../utility/breakpoint";
import { Product } from "../components/Product";
import useCartStore from "../store/useCartStore";
import { Api } from "../api";
import { IProduct } from "../models/product";

export default function Index() {
    const cartStore = useCartStore();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        Api.product.getAll().then(setProducts);
    }, []);

    return (
        <Main>
            <Title>{products.length} Products</Title>
            <Products>
                {products.map((product) => (
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
