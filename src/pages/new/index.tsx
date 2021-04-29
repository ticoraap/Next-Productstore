import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Api } from "../../api";
import { IProduct } from "../../models/product";
import { usToEuNumber } from "../../shared/formatting";

export default function NewProduct() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [pictureURL, setPictureURL] = useState(
        "https://picsum.photos/460/260"
    );

    const onFormSubmit = () => {
        const product: IProduct = {
            title: title,
            subtitle: subtitle,
            description: description,
            price: usToEuNumber(price),
            imgurl: pictureURL + "?" + new Date().getUTCMilliseconds(),
        };

        Api.product.add(product);
    };

    return (
        <ProductForm>
            <StyledNewProductHeader>Add a new product</StyledNewProductHeader>
            <StyledInputWrapper>
                <StyledInputName>Product name</StyledInputName>
                <StyledInput
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                ></StyledInput>
            </StyledInputWrapper>
            <StyledInputWrapper>
                <StyledInputName>Product subtitle</StyledInputName>
                <StyledInput
                    type="text"
                    value={subtitle}
                    onChange={(event) => {
                        setSubtitle(event.target.value);
                    }}
                ></StyledInput>
            </StyledInputWrapper>
            <StyledInputWrapper>
                <StyledInputName>Product description</StyledInputName>
                <StyledInput
                    type="text"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                ></StyledInput>
            </StyledInputWrapper>
            <StyledInputWrapper>
                <StyledInputName>Product price</StyledInputName>
                <StyledInput
                    type="number"
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                ></StyledInput>
            </StyledInputWrapper>
            <StyledInputWrapper>
                <StyledInputName>Picture URL</StyledInputName>
                <StyledInput
                    type="text"
                    value={pictureURL}
                    onChange={(event) => {
                        setPictureURL(event.target.value);
                    }}
                ></StyledInput>
            </StyledInputWrapper>
            <StyledSubmitButton onClick={onFormSubmit}>
                Verzend
            </StyledSubmitButton>
        </ProductForm>
    );
}

const ProductForm = styled.div`
    padding: 0 30px 40px 30px;
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const StyledNewProductHeader = styled.h1``;

const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px 0;
`;

const StyledInputName = styled.p`
    margin: 0;
`;

const StyledInput = styled.input``;

const StyledSubmitButton = styled.button`
    width: fit-content;
    font-size: 20px;
    border-radius: 3px;
`;
