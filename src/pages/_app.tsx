import React, { ReactNode, useState } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { createMainlayoutViewModel } from "../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { cartStore } from '../features/cart/store/CartStore';
import { observer } from "mobx-react-lite";

export interface IAppProps {
    Component: ReactNode | any;
    pageProps: AppProps;
}

const App = observer(({ Component, pageProps }: IAppProps) => {
    const [isCartModalVisible, setCartModalVisible] = useState(false);
    const [productCount, setProductCount] = useState(1);

    const mainLayoutViewModel = createMainlayoutViewModel({cartStore, isCartModalVisible, setCartModalVisible, productCount, setProductCount})

    return <Component mainLayoutViewModel={mainLayoutViewModel} {...pageProps} />;
});

export default App