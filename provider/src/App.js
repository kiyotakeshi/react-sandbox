import React, { Component } from 'react';
import './App.css';

let data = { title: 'Title', message: 'this is sample message.' };

// コンテキストの作成
const SampleContext = React.createContext(data);

class App extends Component {

    newdata = {
        title: 'New Title from Provider',
        message: 'New Message from Provider',
    };

    render() {
        return (
            <div>
                <h1>use context value</h1>
                <Title />
                <Message />

                <h1>change context value by Provider</h1>

                {/* context を使いつつ、コンポーネントの値を変えたい場合は Provider を使用  */}
                {/* 他の context を使っているコンポーネントには影響を与えない */}
                <SampleContext.Provider value={this.newdata}>
                    <Title />
                    <Message />
                </SampleContext.Provider>

                <h1>use context value</h1>
                <Title />
                <Title />
                <Message />
            </div>
        );
    }
}

class Title extends Component {
    // コンテキストの利用
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
