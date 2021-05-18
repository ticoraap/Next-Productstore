import { createContext, useContext } from 'react';

import { createCartStore } from './createCartStore';

const store = createCartStore();

export const CartStoreContext = createContext(store);

export const useCartStore = () => {
	return useContext(CartStoreContext);
};
