import React from "react";
import { Backdrop, IBackdropProps } from "./Backdrop";
import { fireEvent, render } from "@testing-library/react";
import { deepmerge } from "../../../../utils-test/deepmerge";

describe("Backdrop", () => {
    const createComponent = (overrides: DeepPartial<IBackdropProps> = {}) => {
        const props = deepmerge(
            {
                viewModel: {
                    isBackdropVisible: false,
                    hideCart: jest.fn()
                }
            },
            overrides
        )
        return render(<Backdrop {...props} />);
    };

    it("click on backdrop is callback", () => {
        const hideCart = jest.fn();
        const { getByLabelText } = createComponent({ viewModel: { hideCart } });

        fireEvent.click(getByLabelText("Backdrop"));

        expect(hideCart).toHaveBeenCalled();
    });

    it("shows the backdrop", () => {
        const isBackdropVisible = true;
        const { getByLabelText } = createComponent({ viewModel: { isBackdropVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 1,
        });
    });

    it("Enables click events when shown", () => {
        const isBackdropVisible = true;
        const { getByLabelText } = createComponent({ viewModel: { isBackdropVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "initial",
        });
    });

    it("hides the backdrop", () => {
        const isBackdropVisible = false;
        const { getByLabelText } = createComponent({ viewModel: { isBackdropVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 0,
        });
    });

    it("disables click events when hidden", () => {
        const isBackdropVisible = false;
        const { getByLabelText } = createComponent({ viewModel: { isBackdropVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "none",
        });
    });
});
