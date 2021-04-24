import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// reducer を登録した store を作成し export
// export default createStore(memoReducer);
import MemoStore from './memo/Store'


// 表示をレンダリング
ReactDOM.render(
    <Provider store={MemoStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);