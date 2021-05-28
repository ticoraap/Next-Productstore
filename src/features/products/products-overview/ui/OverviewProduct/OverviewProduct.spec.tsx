import React from "react";
import { render } from "@testing-library/react";
import { deepmerge } from "../../../../../utils-test/deepmerge";
import { IOverviewProductProps, OverviewProduct } from "./OverviewProduct";

describe("Product", () => {
    const createComponent = (overrides: DeepPartial<IOverviewProductProps>) => {
        const props = deepmerge(
            {
                viewModel: {
                    title: "",
                    subtitle: "",
                    formattedPrice: "",
                    pictureURL: "",
                    pictureAltText: "",
                    productURL: "",
                    onClick: jest.fn(),
                },
            },
            overrides
        );

        return render(<OverviewProduct {...props} />);
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

    //TODO make a test for the productURL and the onClick
});
