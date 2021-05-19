import { ICartStore } from "../../../../cart/store/createCartStore"

export type IMainLayoutViewModel = ReturnType<typeof createMainlayoutViewModel>

export interface IMainLayoutViewModelProps {
    cartStore: ICartStore
}

export function createMainlayoutViewModel({cartStore} : IMainLayoutViewModelProps){
    return {
        cartStore,
    }
}