import { Dispatch, SetStateAction } from "react"
import { ICartStore } from "../../../../cart/store/createCartStore"
import { createCartViewModel } from "../../../../cart/ui/CartViewModel"
import { createHeaderViewModel } from "../../header/HeaderViewModel"
import { createCartModalContentViewModel } from "../../modal/ModalViewModel"

export type IMainLayoutViewModel = ReturnType<typeof createMainlayoutViewModel>

export interface IMainLayoutViewModelProps {
    cartStore: ICartStore
    isCartModalVisible: boolean
    setCartModalVisible: Dispatch<SetStateAction<boolean>>;
    productCount: number
    setProductCount: Dispatch<SetStateAction<number>>;
}

export function createMainlayoutViewModel({cartStore, isCartModalVisible, setCartModalVisible, productCount, setProductCount} : IMainLayoutViewModelProps){
    return {
        productCount,
        setProductCount,
        headerViewModel: createHeaderViewModel({cartStore, setCartModalVisible}),
        modalViewModel: createCartModalContentViewModel({isCartModalVisible, setCartModalVisible}),
        cartViewModel: createCartViewModel({cartStore})
    }
}