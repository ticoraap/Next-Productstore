import { observable } from 'mobx';

import { ICartStore } from '../../../store/createCartStore';
import { ICartProduct } from '../cartProduct';


type ICartStoreMockOverrides = Partial<jest.Mocked<ICartStore>>;

export function createCartStoreMock(overrides: ICartStoreMockOverrides = {}) {
	const mock: jest.Mocked<ICartStore> = {
		products: observable<ICartProduct>([]),
        getCartCount: jest.fn(),
        getTotalCartPrice: jest.fn(),
        getTotalProductPrice: jest.fn(),
        isInCart: jest.fn(),
        removeProduct: jest.fn(),
        addProduct: jest.fn(),
        incrementAmount: jest.fn(),
        decrementAmount: jest.fn(),
		...overrides,
	};

	return mock;
}