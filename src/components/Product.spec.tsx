import { render } from "@testing-library/react";
import React from "react";
import { IProductProps, Product } from "./Product";

describe("Product", () => {
    const createComponent = (overrides: DeepPartial<IProductProps>) => {
        const props: IProductProps = {
            onAddToCartClick: null,
            product: {
                id: "",
                title: "",
                subtitle: "",
                description: "",
                imgurl: "",
                price: 0,
                ...overrides.product,
            },
        };

        return render(<Product {...props} />);
    };

    it("renders a title", () => {
        const title = "Mount Everest";
        const { getByText } = createComponent({ product: { title } });

        expect(getByText(title)).toBeInTheDocument();
    });

    it("renders a subtitle", () => {
        const title = "Kilimanjaro";
        const { getByText } = createComponent({ product: { title } });

        expect(getByText(title)).toBeInTheDocument();
    });

    it("renders a product image", () => {
        const title = "Kachenjunga";
        const imgurl = "https://example.org/somephoto.jpg";
        const { getByAltText } = createComponent({
            product: { title, imgurl },
        });

        expect(getByAltText(`Image of ${title}`)).toHaveAttribute(
            "src",
            imgurl
        );
    });
});
