import React from "react";
import { Backdrop, IBackdropProps } from "./Backdrop";
import { fireEvent, render } from "@testing-library/react";
import { deepmerge } from "../../../../utils-test/deepmerge";

describe("Backdrop", () => {
    const createComponent = (overrides: DeepPartial<IBackdropProps> = {}) => {
        const props = deepmerge(
            {
                viewModel: {
                    isVisible: false,
                    onBackdropClick: jest.fn()
                }
            },
            overrides
        )
        return render(<Backdrop {...props} />);
    };

    it("click on backdrop is callback", () => {
        const onBackdropClick = jest.fn();
        const { getByLabelText } = createComponent({ viewModel: { onBackdropClick } });

        fireEvent.click(getByLabelText("Backdrop"));

        expect(onBackdropClick).toHaveBeenCalled();
    });

    it("shows the backdrop", () => {
        const isVisible = true;
        const { getByLabelText } = createComponent({ viewModel: { isVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 1,
        });
    });

    it("Enables click events when shown", () => {
        const isVisible = true;
        const { getByLabelText } = createComponent({ viewModel: { isVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "initial",
        });
    });

    it("hides the backdrop", () => {
        const isVisible = false;
        const { getByLabelText } = createComponent({ viewModel: { isVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 0,
        });
    });

    it("disables click events when hidden", () => {
        const isVisible = false;
        const { getByLabelText } = createComponent({ viewModel: { isVisible }});

        expect(getByLabelText("Backdrop")).toHaveStyle({
            pointerEvents: "none",
        });
    });
});
