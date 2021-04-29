import React from "react";
import { Modal, IModalProps } from "./Modal";
import { fireEvent, render } from "@testing-library/react";

describe("Modal", () => {
    const createComponent = (overrides: Partial<IModalProps> = {}) => {
        const props: IModalProps = {
            children: <></>,
            isVisible: false,
            onBackdropClick: null,
            ...overrides,
        };
        return render(<Modal {...props} />);
    };

    it("click on backdrop is callback", () => {
        const onBackdropClick = jest.fn();
        const { getByLabelText } = createComponent({ onBackdropClick });

        fireEvent.click(getByLabelText("Backdrop"));

        expect(onBackdropClick).toHaveBeenCalled();
    });

    it("shows the backdrop", () => {
        const { getByLabelText } = createComponent({ isVisible: true });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 1,
        });
    });

    it("hides the backdrop", () => {
        const { getByLabelText } = createComponent({ isVisible: false });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 0,
        });
    });

    it("shows the modal", () => {
        const { getByLabelText } = createComponent({ isVisible: true });

        expect(getByLabelText("Modal")).toHaveStyle({
            opacity: 1,
        });
    });

    it("enables click events when shown", () => {
        const { getByLabelText } = createComponent({ isVisible: true });

        expect(getByLabelText("Modal")).toHaveStyle({
            pointerEvents: "initial",
        });
    });

    it("hides the modal", () => {
        const { getByLabelText } = createComponent({ isVisible: false });

        expect(getByLabelText("Modal")).toHaveStyle({
            opacity: 0,
        });
    });

    it("disables click events when hidden", () => {
        const { getByLabelText } = createComponent({ isVisible: false });

        expect(getByLabelText("Modal")).toHaveStyle({
            pointerEvents: "none",
        });
    });
});
