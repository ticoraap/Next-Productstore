import { render } from '@testing-library/react';
import { deepmerge } from '../../../../utils-test/deepmerge';
import React from 'react';
import { IProductPageProps, ProductPage } from './ProductPage';
import { createCartStoreMock } from '../../../cart/domain/model/__mocks__/createCartStoreMock';


describe('ProductPage', () => {
    const createComponent = (overrides: DeepPartial<IProductPageProps>) => {
        const cartStore = createCartStoreMock();
        const props = deepmerge(
            {
                viewModel: {
                    title: "",
                    subtitle: "",
                    description: "",
                    imageUrl: "",
                    imageAltText: "",
                    formattedPrice: "",
                    productCount: 0,
                    onIncrement: jest.fn(),
                    onDecrement: jest.fn(),
                    onAddToCart: jest.fn(),
                    onResetCount: jest.fn(),
                }
            },
            overrides
        );
        return render(<ProductPage {...props}/>)
    };

    it('renders a product title', () => {
        const title = "Meelworm";
        const { getByText } = createComponent({viewModel: {title} })
        expect(getByText(title)).toBeInTheDocument();
    });
    
    it('renders a product subtitle', () => {
        const subtitle = "Meelworm ecologische optie";
        const { getByText } = createComponent({viewModel: { subtitle} })
        expect(getByText(subtitle)).toBeInTheDocument();
    });
    
    it('renders a product description', () => {
        const description = "Voor een zinvolle maaltijd";
        const { getByText } = createComponent({viewModel: { description} })
        expect(getByText(description)).toBeInTheDocument();
    });

    it("renders a product image", () => {
        const imageAltText = "Image of Kachenjunga";
        const imageUrl = "https://example.org/somephoto.jpg";
        const { getByAltText } = createComponent({
            viewModel: { imageAltText, imageUrl },
        });

        expect(getByAltText(`Image of Kachenjunga`)).toHaveAttribute(
            "src",
            imageUrl
        );
    });

    it('renders a formatted price', () => {
        const formattedPrice = "23.99";
        const { getByText } = createComponent({viewModel: { formattedPrice } })
        expect(getByText(formattedPrice)).toBeInTheDocument();
    });

})