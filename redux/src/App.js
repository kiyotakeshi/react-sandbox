import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Redux</h1>
                <Message />
                <Button />
            </>
        );
    }
}

// connect 関数は component に store を接続する
// App component は store に関する機能を使うことがなかったので以下の記載は不要
// App = connect()(App);

// connect() が関数オブジェクトを返すので変数に代入
// let wrapWithConnect = connect();

// それを App を引数に実行した結果を App に代入
// App = wrapWithConnect(App);

class Message extends Component {
    style = {
        fontSize: '20pt',
        padding: '20px 5px',
    };

    render() {
        return (
            <p style={this.style}>
                {this.props.message}: {this.props.counter}
            </p>
        );
    }
}

// state を引数に渡して state を返す関数
// この component で利用する state を返す関数
// ただし、場合によっては必要な値だけを返すように実装する
// Redux の store にはすべての component で扱う state を管理するため、
// それら全てを、 store をつかう component に this.props で追加するのは、プログラムが大きくなる非現実的
function mappingState(state) {
    return state;
}

// connect に渡す state は this.props に組み込まれる
Message = connect(mappingState)(Message);

class Button extends Component {
    style = {
        fontSize: '16pt',
        padding: '5px 10px',
    };

    constructor(props) {
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        if (e.shiftKey) {
            // dispatch は reducer を呼び出し、 state を操作するための機能
            // Redux に action を送る(store の reducer が呼び出され必要な処理が実行される)
            // 引数に action type を指定
            this.props.dispatch({ type: 'DECREMENT' });
        } else if (e.ctrlKey) {
            this.props.dispatch({ type: 'RESET' });
        } else {
            this.props.dispatch({ type: 'INCREMENT' });
        }
    }

    render() {
        return (
            <button style={this.style} onClick={this.doAction}>
                click
            </button>
        );
    }
}

// state は使わないが store に登録されている reducer を使用するので、 connect は必要
Button = connect()(Button);

export default App;
