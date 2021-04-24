import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

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
        case 'RESET':
            return {
                counter: 0,
                message: 'RESET',
            };
        default:
            return state;
    }
}

// Redux Persist の設定
const persistConfig = {
    key: 'root', // ブラウザのローカルストレージが使用する key
    storage, // 使用ストレージの指定(redux-persist の用意する物を使用)
};

// reducer を元に store を作成
// let store = createStore(counter);

// persist reducer を設定の上、 reducer とともに store を作成
const persistedReducer = persistReducer(persistConfig, counter);
let store = createStore(persistedReducer);

// persistor の作成
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        {/* PersisGate はデータの読み書きが完了するまで、 component の表示を待たせるためのもの */}
        {/* ローカルのボリュームからデータを読み書きする際に、保存が完了する前に component が画面に表示されて操作されるとデータがおかしくなるため */}
        <PersistGate loading={<p>loading...</p>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
