import { render } from "@testing-library/react";
import React from "react";
import { deepmerge } from "../../../../../utils-test/deepmerge";
import { IProductProps, Product } from "./OverviewProduct";

describe("Product", () => {
    const createComponent = (overrides: DeepPartial<IProductProps>) => {
        const props = deepmerge(
            {
                onAddToCartClick: null,
                viewModel: {
                    formattedPrice: "",
                    pictureURL: "",
                    pictureAltText: "",
                    productURL: "",
                    product: {
                        id: "",
                        slug: "",
                        title: "",
                        subtitle: "",
                        description: "",
                        imgurl: "",
                        price: 0,
                    },
                    title: "",
                    subtitle: "",
                    slug: "",
                },
            },
            overrides
        );

        return render(<Product {...props} />);
    };

    it("renders a title", () => {
        const title = "Mount Everest";
        const { getByText } = createComponent({ viewModel: { title: title } });

        expect(getByText(title)).toBeInTheDocument();
    });

    it("renders a subtitle", () => {
        const subtitle = "Kilimanjaro";
        const { getByText } = createComponent({ viewModel: { subtitle } });

        expect(getByText(subtitle)).toBeInTheDocument();
    });

    it("renders a product image", () => {
        const pictureAltText = "Image of Kachenjunga";
        const pictureURL = "https://example.org/somephoto.jpg";
        const { getByAltText } = createComponent({
            viewModel: { pictureAltText, pictureURL },
        });

        expect(getByAltText(`Image of Kachenjunga`)).toHaveAttribute(
            "src",
            pictureURL
        );
    });
});
