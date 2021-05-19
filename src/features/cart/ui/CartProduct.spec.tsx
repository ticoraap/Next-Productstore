import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { deepmerge } from "../../../utils-test/deepmerge";
import { ICartProduct } from "../domain/model/cartProduct";
import { CartProduct, ICartProductProps } from "./CartProduct";

describe("Product", () => {
    const createComponent = (overrides: DeepPartial<ICartProductProps>) => {
        const props = deepmerge(
            {
                viewModel: { 
                    title: "",
                    subtitle: "",
                    imgurl: "",
                    altImageText: "",
                    productAmount: 0,
                    formattedProductTotalPrice: "",
                    incrementProductAmount: null,
                    decrementProductAmount: null,
                }
            },
            overrides
        );

        return render(<CartProduct {...props} />);
    };

    it("increments the amount", () => {
        const incrementProductAmount = jest.fn();
        const { getByText } = createComponent({ viewModel: { incrementProductAmount }});

        fireEvent.click(getByText("+"));

        expect(incrementProductAmount).toHaveBeenCalled();
    });

    it("decrements the amount", () => {
        const decrementProductAmount = jest.fn();
        const { getByText } = createComponent({ viewModel: { decrementProductAmount }});

        fireEvent.click(getByText("-"));

        expect(decrementProductAmount).toHaveBeenCalled();
    });

    it("renders a title", () => {
        const product = { title: "Mount Everest" };
        const { getByText } = createComponent({ viewModel: product });

        expect(getByText(product.title)).toBeInTheDocument();
    });

    it("renders a subtitle", () => {
        const product = { subtitle: "Kilimanjaro" };
        const { getByText } = createComponent({ viewModel: product });

        expect(getByText(product.subtitle)).toBeInTheDocument();
    });

    it("renders a product image", () => {
        const altImageText = "Image of Kachenjunga";
        const imgurl = "https://example.org/somephoto.jpg";
        const { getByAltText } = createComponent({ viewModel: {altImageText, imgurl} });

        expect(getByAltText(altImageText)).toHaveAttribute("src", imgurl);
    });

    it("renders a amount", () => {
        const product = { productAmount: 9696 };
        const { getByText } = createComponent({ viewModel: product });

        expect(getByText("9696")).toBeInTheDocument();
    });

    it("renders a formated calculated price", () => {
        const formattedProductTotalPrice = "€ 38,97";
        const { getByText } = createComponent({ viewModel: {formattedProductTotalPrice} });

        expect(getByText(formattedProductTotalPrice)).toBeInTheDocument();
    });
});
