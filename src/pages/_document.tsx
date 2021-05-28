import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Head>
                <body>
                    <Main />
                    <div id="modal-root" />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument