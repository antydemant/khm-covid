import { Layout } from 'antd';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { HeaderMenu } from "components/header-menu";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
                </Head>
                <body>
                    <Layout>
                        <Header />
                        <HeaderMenu />
                        <Main />
                        <Footer />
                    </Layout>
                    <NextScript />
                </body>
            </Html>
        )
    }
};