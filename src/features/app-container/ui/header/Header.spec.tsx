import React from "react";
import { Header, IHeaderProps } from "./Header";
import { fireEvent, render } from "@testing-library/react";
import { deepmerge } from '../../../../utils-test/deepmerge';


describe("Header", () => {
    const createComponent = (overrides: DeepPartial<IHeaderProps> = {}) => {
        const props = deepmerge(
            {
                viewModel: {
                    cartCount: 0,
                    showCart: null,
                }
            },
            overrides
        );
        return render(<Header {...props} />);
    };

    it("calls the callback when the cart button is clicked", () => {
        const showCart = jest.fn();
        const { getByLabelText } = createComponent({ viewModel: { showCart } });

        fireEvent.click(getByLabelText("Cart button"));

        expect(showCart).toHaveBeenCalled();
    });

    it("renders a product amount", () => {
        const cartCount: number = 1337;
        const { getByText } = createComponent({ viewModel: { cartCount } });

        expect(getByText(cartCount)).toBeInTheDocument();
    });
});
