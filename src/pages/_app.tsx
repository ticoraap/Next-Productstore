import React, { useState, ReactNode } from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";

import { observer } from "mobx-react-lite";

export interface IAppProps {
    Component: ReactNode | any;
    pageProps: AppProps;
}

export default observer(({ Component, pageProps }: IAppProps) => {
    return <Component {...pageProps} />;
});
