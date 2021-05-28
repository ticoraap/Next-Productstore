import React from "react";
import { Modal, IModalProps } from "./Modal";
import { fireEvent, render } from "@testing-library/react";
import { deepmerge } from "../../../../utils-test/deepmerge";

describe("Modal", () => {
    const createComponent = (overrides: DeepPartial<IModalProps> = {}) => {

        const modalrootElement = document.createElement('div')
        modalrootElement.setAttribute('id', 'modal-root')

        const props = deepmerge(
            {
                viewModel:{
                    isCartVisible: false,
                    hideCart: null,
                    backdropViewModel: {
                        isVisible: false,
                        onBackdropClick: null
                    }
                    
                }
            },
            overrides
        )
        return render(<Modal {...props} />, {
            container: document.body.appendChild(modalrootElement)
        });
    };

    it("click on backdrop is callback", () => {
        const onBackdropClick = jest.fn();
        const { getByLabelText } = createComponent({ viewModel: { backdropViewModel: { onBackdropClick }} });

        fireEvent.click(getByLabelText("Backdrop"));

        expect(onBackdropClick).toHaveBeenCalled();
    });

    it("shows the backdrop", () => {
        const { getByLabelText } = createComponent({ viewModel: { backdropViewModel: { isVisible: true }} });

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 1,
        });
    });

    it("hides the backdrop", () => {
        const { getByLabelText } = createComponent();

        expect(getByLabelText("Backdrop")).toHaveStyle({
            opacity: 0,
        });
    });

    it("shows the modal", () => {
        const { getByLabelText } = createComponent({ viewModel: { isCartVisible: true } });

        expect(getByLabelText("Modal")).toHaveStyle({
            opacity: 1,
        });
    });

    it("enables click events when shown", () => {
        const { getByLabelText } = createComponent({ viewModel: { isCartVisible: true } });

        expect(getByLabelText("Modal")).toHaveStyle({
            pointerEvents: "initial",
        });
    });

    it("hides the modal", () => {
        const { getByLabelText } = createComponent({ viewModel: { isCartVisible: false } });

        expect(getByLabelText("Modal")).toHaveStyle({
            opacity: 0,
        });
    });

    it("disables click events when hidden", () => {
        const { getByLabelText } = createComponent({ viewModel: { isCartVisible: false } });

        expect(getByLabelText("Modal")).toHaveStyle({
            pointerEvents: "none",
        });
    });
});
