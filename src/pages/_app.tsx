import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

export interface IAppProps {
    Component: ReactNode | any;
    pageProps: AppProps;
}

const App = ({ Component, pageProps }: IAppProps) => {
    return <Component {...pageProps} />;
};

export default App