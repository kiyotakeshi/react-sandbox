import React, { Component } from 'react';
import './App.css';

let data = {
    title: 'Title from context',
    message: 'This message from context',
};

// コンポーネントに共通の値をどう持たせるかが、コンポーネントが増えてくると難しくなる
// 1つ1つのコンポーネントに同じ属性を用意すると、変更時の修正箇所も多くなる
// 全体で共通して使える値を用意するための仕組みが、コンテキスト
// ※ すべてのコンポーネントで同じ値、ではなく個別のコンポーネントで値を書き換えたい場合は、 Provider を使用する

// コンテキストの作成
const SampleContext = React.createContext(data);

class App extends Component {
    render() {
        return (
            <>
                <h1>Context</h1>
                <Title />
                <Message />
            </>
        );
    }
}

class Title extends Component {
    // コンテキストの使用
    static contextType = SampleContext;

    render() {
        return (
            <div>
                <h2>{this.context.title}</h2>
            </div>
        );
    }
}

class Message extends Component {
    // コンテキストの使用
    static contextType = SampleContext;

    render() {
        return (
            <div>
                <p>{this.context.message}</p>
            </div>
        );
    }
}

export default App;
