import React from "react";
import { Backdrop, IBackdropProps } from "./Backdrop";
import { fireEvent, getByText, render } from "@testing-library/react";

describe("Backdrop", () => {
    const createComponent = (overrides: Partial<IBackdropProps> = {}) => {
        const props: IBackdropProps = {
            isVisible: false,
            onBackdropClick: null,
            ...overrides,
        };
        return render(<Backdrop {...(props as IBackdropProps)} />);
    };

    it("click on backdrop is callback", () => {
        const onBackdropClick = jest.fn();
        const { getByLabelText } = createComponent({ onBackdropClick });

        fireEvent.click(getByLabelText("Backdrop"));

        expect(onBackdropClick).toHaveBeenCalled();
    });

    it("shows the backdrop", () => {
        const isVisible = true;
        const { getByLabelText } = createComponent({ isVisible });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 1,
        });
    });

    it("Enables click events when shown", () => {
        const isVisible = true;
        const { getByLabelText } = createComponent({ isVisible });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "initial",
        });
    });

    it("hides the backdrop", () => {
        const isVisible = false;
        const { getByLabelText } = createComponent({ isVisible });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 0,
        });
    });

    it("disables click events when hidden", () => {
        const isVisible = false;
        const { getByLabelText } = createComponent({ isVisible });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "none",
        });
    });
});
