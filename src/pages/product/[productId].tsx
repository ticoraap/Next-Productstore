import React from "react";
import { getProduct, getProductsSlugs } from "../../features/products/product/domain/use-cases";

import { ProductPage } from '../../features/products/product/ui/ProductPage'
import { createProductViewModel } from '../../features/products/product/ui/ProductViewModel'

export default function Index({product}) {
    return (
        <ProductPage viewModel={createProductViewModel(product)} />
    );
}

export async function getStaticPaths() {
    const slugs = await getProductsSlugs();

    return {
        fallback: false,
        paths: slugs.map((slug) => {
            return {
                params: {
                    productId: slug,
                },
            };
        }),
    };
}

export async function getStaticProps(context) {
    const slug = context.params.productId;
    if (!slug) return;

    const product = await getProduct(slug)
    return {
        props: {
            product,
        },
    };
}
