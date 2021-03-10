import { fireEvent, getByAltText, render } from "@testing-library/react";
import React from "react";
import { ICartProduct } from "../models/cartProduct";
import { CartProduct, ICartProductProps } from "./CartProduct";

describe("Product", () => {
    const createComponent = ({
        product,
        ...rest
    }: DeepPartial<ICartProductProps>) => {
        const productOverrides = product as ICartProduct;

        const props: ICartProductProps = {
            incrementAmount: jest.fn() as any,
            decrementAmount: jest.fn() as any,
            product: {
                id: 0,
                title: "",
                subtitle: "",
                imgurl: "",
                price: 0,
                amount: 0,

                ...productOverrides,
            },

            ...rest,
        };

        return render(<CartProduct {...props} />);
    };

    it("increments the amount", () => {
        const incrementAmount = jest.fn();
        const { getByText } = createComponent({ incrementAmount });

        fireEvent.click(getByText("+"));

        expect(incrementAmount).toHaveBeenCalled();
    });

    it("decrements the amount", () => {
        const decrementAmount = jest.fn();
        const { getByText } = createComponent({ decrementAmount });

        fireEvent.click(getByText("-"));

        expect(decrementAmount).toHaveBeenCalled();
    });

    it("renders a title", () => {
        const product = { title: "Mount Everest" };
        const { getByText } = createComponent({ product });

        expect(getByText(product.title)).toBeInTheDocument();
    });

    it("renders a subtitle", () => {
        const product = { subtitle: "Kilimanjaro" };
        const { getByText } = createComponent({ product });

        expect(getByText(product.subtitle)).toBeInTheDocument();
    });

    it("renders a product image", () => {
        const product = {
            title: "Kachenjunga",
            imgurl: "https://example.org/somephoto.jpg",
        };
        const { getByAltText } = createComponent({ product });

        expect(getByAltText("Image of Kachenjunga")).toHaveAttribute(
            "src",
            product.imgurl
        );
    });

    it("renders a amount", () => {
        const product = { amount: 9696 };
        const { getByText } = createComponent({ product });

        expect(getByText("9696")).toBeInTheDocument();
    });

    it("renders a formated calculated price", () => {
        const product = { amount: 3, price: 12.99 };
        const { getByText } = createComponent({ product });

        expect(getByText("€ 38,97")).toBeInTheDocument();
    });
});
