import React from "react";
import styled from "@emotion/styled";
import { contentApi } from "../../features/shared/data/contentful";
import { ContentType } from "../../features/shared/data/contentful/constants/ContentType";

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
    const items = await contentApi.getEntriesByType(ContentType.Products);
    const slugs = items.map((item) => item.fields.slug);

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

    const product = await contentApi
        .getEntryBySlug(slug, ContentType.Products)
        .then((item: any) => {
            return {
                id: item.sys.id,
                title: item.fields.title,
                subtitle: item.fields.subtitle,
                description: item.fields.description,
                price: item.fields.price,
                imgurl: item.fields.imgurl,
            };
        });
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
