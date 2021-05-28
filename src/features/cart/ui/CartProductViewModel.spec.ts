
import { ICartProduct } from "../domain/model/cartProduct";
import { createCartProductViewModel } from "./CartProductViewModel";
import { createCartStoreMock } from "../domain/model/__mocks__/createCartStoreMock";


describe('CartProductViewModel', () => {

    const cartStore = createCartStoreMock({
        totalProductAmount: jest.fn().mockReturnValue(44),
    });

    const product: ICartProduct = {
        id: '1234AB',
        title: "Ritchie",
        subtitle: "Dennis",
        description: "Latest book v3",
        imgurl: "http://img.org/image.jpg",
        price: 22,
        amount: 2,
        slug: "ritchie.image"
    }

    it('returns a viewmodel', () => {
        const viewModel = createCartProductViewModel({cartStore, product})
        
        expect(viewModel).toEqual(expect.objectContaining({
            id: "1234AB",
            title: "Ritchie",
            subtitle: "Dennis",
            imgurl: "http://img.org/image.jpg",
            altImageText: "Image of Ritchie",
            productAmount: 2,
            formattedProductTotalPrice: "€ 44,00".replace(/\s/, String.fromCharCode(160)),
        }))
    })
})