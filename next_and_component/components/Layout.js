import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';

// レイアウトに関する component を一箇所にまとめることで、見通しが良くなる
class Layout extends Component {
    render() {
        return (
            <div>
                {/* HTML の <head> タグに相当 */}
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                {style}
                <Header header={this.props.header} title={this.props.title} />
                {/* コンポーネントの開始タグと終了タグの間に書かれたコンテンツ( <Layout> のタグ内) は children プロパティとして取り出せる */}
                {/*
                <Layout header="Next" title="Top page.">
                    <p>Welcome to next.js!</p>
                    <hr />
                    <Link href="./other">
                        <button>go to Other</button>
                    </Link>
                </Layout>
                */}
                {this.props.children}
                <Footer footer="footer design" />
            </div>
        );
    }
}
export default Layout;
