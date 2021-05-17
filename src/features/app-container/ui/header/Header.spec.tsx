import React from "react";
import { Header, IHeaderProps } from "./Header";
import { fireEvent, render } from "@testing-library/react";

describe("Header", () => {
    const createComponent = (overrides: Partial<IHeaderProps> = {}) => {
        const props: IHeaderProps = {
            cartCount: 0,
            onCartClick: null,
            ...overrides,
        };
        return render(<Header {...props} />);
    };

    it("calls the callback when the cart button is clicked", () => {
        const onCartClick = jest.fn();
        const { getByLabelText } = createComponent({ onCartClick });

        fireEvent.click(getByLabelText("Cart button"));

        expect(onCartClick).toHaveBeenCalled();
    });

    it("renders a product amount", () => {
        const cartCount = 1337;
        const { getByText } = createComponent({ cartCount });

        expect(getByText(cartCount)).toBeInTheDocument();
    });
});
