import { ICartStore } from "../../../cart/store/createCartStore";
import { Dispatch, SetStateAction } from "react"

export type IHeaderViewModel = ReturnType<typeof createHeaderViewModel>

export interface IHeaderViewModelProps {
    cartStore: ICartStore;
    setCartModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function createHeaderViewModel({cartStore, setCartModalVisible}: IHeaderViewModelProps){
    return {
        get cartCount(){
            return cartStore.getCartCount();
        },
        onCartClick: () => setCartModalVisible(true)
    }
}
