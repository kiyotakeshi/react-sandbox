import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';


// コンテキストは共通の値を扱えるが、処理までは統一できない
// 値を変更する際も、 Provider が必要で、基本的には用意された値を各コンポーネントで取り出す使い方を想定
// 値や処理をアプリ内で統合して管理するための仕組みで、有名なライブラリが Redux

// Redux において、値の保管場所は1つ = store だけ
// ストアが用意する値は、読み取り専用、書き換え不可
// ストアの値の変更は関数を利用して、ストアの値を新たに設定し直すことで実現(setState のようなイメージ)

// store はデータを保管し管理するもの、 state を保管する
// provider は store をコンポーネントに受け渡すための仕組み
// reducer は store に保管される state を変更するための仕組み

// store に保存する state
let state_value = {
    counter: 0,
    message: 'COUNTER',
};

// reducer
function counter(state = state_value, action) {
    // どんな type の時に、どんな値を return するか
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1,
                message: 'INCREMENT',
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1,
                message: 'DECREMENT',
            };
        default:
            return state;
    }
}

// reducer を元に store を作成
let store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        {/* Provider により App component に store の内容が渡される　 */}
        <App />
    </Provider>,
    document.getElementById('root')
);
