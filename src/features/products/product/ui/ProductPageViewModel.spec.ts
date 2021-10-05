import { deepmerge } from "../../../../utils-test/deepmerge"
import { createCartStoreMock } from "../../../cart/domain/model/__mocks__/createCartStoreMock"
import { IProduct } from "../domain/model/IProduct"
import { createProductPageViewModel, IProductPageViewModelProps } from "./ProductPageViewModel"

describe('ProductPageViewModel', () => {
    const product: IProduct = {
        id: '1234AB',
        title: "Ritchie",
        subtitle: "Dennis",
        description: "Latest book v3",
        imgurl: "http://img.org/image.jpg",
        price: 22,
        slug: "ritchie.image"
    }
    const cartStore = createCartStoreMock()
    const productCount = 0;
    const setProductCount = jest.fn();

    const createViewModel = (overrides: DeepPartial<IProductPageViewModelProps> = {}) => {
        const props = deepmerge(
            {
                product,
                cartStore,
                productCount,
                setProductCount
            },
            overrides
        )
        return createProductPageViewModel(props)
    }

    it('returns properties', () => {
        const viewModel = createViewModel()
        expect(viewModel).toEqual(expect.objectContaining({
            title: "Ritchie",
            subtitle: "Dennis",
            description: "Latest book v3",
            imageUrl: "http://img.org/image.jpg",
            imageAltText: "Image of Ritchie",
            formattedPrice: "€ 22,00".replace(/\s/, String.fromCharCode(160)),
            productCount: 0,
        }))
    })


    it('calls onIncrement', () => {
        const setProductCount = jest.fn()
        const viewModel = createViewModel({
            productCount: 3,
            setProductCount
        })

        viewModel.onIncrement()

        expect(setProductCount).toHaveBeenCalledWith(4)
    })

    it('calls onDecrement', () => {
        const setProductCount = jest.fn()
        const viewModel = createViewModel({
            productCount: 5,
            setProductCount
        })

        viewModel.onDecrement()

        expect(setProductCount).toHaveBeenCalledWith(4)
    })

    it('calls onResetCount', () => {
        const setProductCount = jest.fn()
        const viewModel = createViewModel({
            productCount: 12,
            setProductCount
        })

        viewModel.onResetCount()

        expect(setProductCount).toHaveBeenCalledWith(1)
    })

    it('calls onAddToCart', () => {
        const addProduct = jest.fn()
        const viewModel = createViewModel({
            cartStore: createCartStoreMock({
                addProduct
            }),
            productCount: 2,
        })

        viewModel.onAddToCart();
        expect(addProduct).toHaveBeenCalledWith(product,2)
    })
})