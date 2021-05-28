import { IProduct } from '../../products/products-overview/domain/model/product';
import { ICartProduct } from '../domain/model/cartProduct';
import { createCartStore } from './createCartStore';


describe('CartStore', () => {
    const createProduct = (overrides: Partial<IProduct>): IProduct => {
        return {
            id: "",
            title: "",
            subtitle: "",
            description: "",
            imgurl: "",
            price: 0,
            slug: "",
            ...overrides
        } 
    }

	it('returns true true when id in cart', () => {
		const cartStore = createCartStore();
		const id = "ABC123";

		const product = createProduct({id})
        cartStore.addProduct(product)

		expect(cartStore.isInCart(id)).toBe(true);
	});

	it('returns false when id not in cart', () => {
		const cartStore = createCartStore();

		const incorrectId = "XYZ098";
		expect(cartStore.isInCart(incorrectId)).toBe(false);
	});

	it('stores a product and updated the store', () => {
        const cartStore = createCartStore();
        const product = createProduct({
            id:"TSRTL",
            title: "Nimbus 9000",
            subtitle: "The new speed record holder",
            description: "Flies you to the moon",
            imgurl: "http://imgurl.img",
            price: 30.20,
            slug: "nimbus-9000",
        })
        
		cartStore.addProduct(product);
        
        const productWithAmount: ICartProduct = {
            ...product,
            amount: 1,
        } 
        const cartProductList  = [productWithAmount];
        
		expect(cartProductList).toStrictEqual(cartStore.products);
	});
    
	it('removes a product', () => {
        const cartStore = createCartStore();
		const id = "MACBOOK";

        const product = createProduct({id})
		cartStore.addProduct(product)
        cartStore.removeProduct(id)

		expect(cartStore.products).toStrictEqual([]);
	});

    it('increases count of the store', () => {
        const cartStore = createCartStore();
		const id1 = "MACBOOK";
		const id2 = "CHROMEBOOK";

        const product1 = createProduct({id: id1})
        const product2 = createProduct({id: id2})
		cartStore.addProduct(product1)
		cartStore.addProduct(product2)
   
		expect(cartStore.cartCount).toStrictEqual(2);
	});

    it('decreases count of the store', () => {
        const cartStore = createCartStore();
		const id1 = "MACBOOK";
		const id2 = "CHROMEBOOK";

        const product1 = createProduct({id: id1})
        const product2 = createProduct({id: id2})
		cartStore.addProduct(product1)
		cartStore.addProduct(product2)
		cartStore.removeProduct(id1)
   
		expect(cartStore.cartCount).toStrictEqual(1);
	});

    it('calculates the totalammount of two of the same product', () => {
        const cartStore = createCartStore();
		const id = "MACBOOK";
		const price = 299.99
        const totalprice = 599.98

        const product = createProduct({id, price})
		cartStore.addProduct(product)
		cartStore.addProduct(product)
   
		expect(cartStore.totalAmount).toStrictEqual(totalprice);
	});

    it('calculates the totalammount of each of two different products', () => {
        const cartStore = createCartStore();

		const id1 = "MACBOOK";
		const price1 = 1200.70
        
        const id2 = "chromebook";
		const price2 = 299.99

        const totalprice = 3001.38


        const product1 = createProduct({id: id1, price: price1})
        const product2 = createProduct({id: id2, price: price2})

		cartStore.addProduct(product1, 2)
		cartStore.addProduct(product2, 2)

		expect(cartStore.totalAmount).toStrictEqual(totalprice);
	});
});