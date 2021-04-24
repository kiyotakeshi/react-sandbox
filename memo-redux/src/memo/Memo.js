import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class Memo extends Component {
    render() {
        let data;
        let n = 0;

        // console.log("memo");
        // console.log(this.props); // {data: Array(1), message: "please type message:", mode: "default", fdata: Array(0), dispatch: ƒ}

        // store に用意した値で作成する項目を変更
        switch (this.props.mode) {
            case 'default':
            case 'delete':
                // Item オブジェクトの配列に変換
                data = this.props.data.map((value) => (
                    // <Item key="sample data" value={value} index=0 />
                    <Item key={value.message} value={value} index={n++} />
                ));
                break;

            case 'find':
                // 検索結果にマッチしたデータをわたす
                data = this.props.fdata.map((value) => (
                    <Item key={value.message} value={value} index={n++} />
                ));
                break;

            default:
                data = this.props.data.map((value) => (
                    <Item key={value.message} value={value} index={n++} />
                ));
        }
        return (
            <table>
                <tbody>{data}</tbody>
            </table>
        );
    }
}

// 引数の state をそのまま返すアロー関数を指定し、 Memo component に connect し、 export
export default connect((state) => state)(Memo);
// export default connect((state) => {
//     console.log(state); // {data: Array(1), message: "please type message:", mode: "default", fdata: Array(0)}
//     return state;
// })(Memo);

// function mappingState(state) {
//     return state;
// }
// // connect に渡す state は this.props に組み込まれる
// connect(mappingState)(Memo);
