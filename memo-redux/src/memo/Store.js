import { createStore } from 'redux';

const initData = {
    data: [{ message: 'sample data', created: new Date() }],
    message: 'please type message:',
    mode: 'default', // どういった操作をしたかを表す値
    fdata: [], // 検索したメモをまとめる配列
};

// reducer
export function memoReducer(state = initData, action) {
    // reducer はただの分岐にして、具体的な処理はそれぞれ関数を用意する
    switch (action.type) {
        case 'ADD':
            // 必ず新しい state の値を戻り値として返す
            return addReduce(state, action);

        case 'DELETE':
            return deleteReduce(state, action);

        case 'FIND':
            return findReduce(state, action);

        default:
            // 最初に以下が呼ばれて、 initData が state として登録される
            // store にアクセスできる component はこれらを使える
            // console.log("default");
            return state;
    }
}

// reduce action
function addReduce(state, action) {
    // console.log(action);// {type: "ADD", message: "aaa"}

    // 保管するメモのデータ
    let data = {
        message: action.message,
        created: new Date(),
    };

    // .slice で各要素を取り出して新しい配列として生成し直す
    // > data = ["a","b","c"];
    // [ 'a', 'b', 'c' ]
    // > data2 = data.slice();
    // [ 'a', 'b', 'c' ]
    // > data === data2
    // false
    let newdata = state.data.slice();

    // 配列の最初に値を追加(最後の場合 .push )
    // > data2
    // [ 'a', 'b', 'c' ]
    // > data2.unshift('d');
    // > data2
    // [ 'd', 'a', 'b', 'c' ]
    newdata.unshift(data);

    return {
        data: newdata,
        message: 'Added!',
        mode: 'default',
        fdata: [],
    };
}

function findReduce(state, action) {
    // console.log(state);
    // console.log(action); // {type: "FIND", find: "aa"}
    let f = action.find;
    // console.log(f); // aa
    let fdata = [];
    state.data.forEach((value) => {
        // メモのデータが順に入ってくる
        // console.log(value); // {message: "sample data", created: Sat Apr 24 2021 14:13:15 GMT+0900 (Japan Standard Time)}
        if (value.message.indexOf(f) >= 0) {
            // indexOf で指定した文字を含んでいるメモをチェックし、検索結果を積める配列に追加
            // 連想配列(Object) を用意し、 文字列を含んでいるかをチェック、
            // 含んでいれば、最初に現れた index を返す
            // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

            // > data = [{ message: "sample"} ,{ message: "aaa"} ,{ message: "aaaaaa"}, { message: "a"} ];
            // [
            //   { message: 'sample' },
            //   { message: 'aaa' },
            //   { message: 'aaaaaa' },
            //   { message: 'a' }
            // ]
            // > data.forEach((value) => console.log(value.message));
            // sample
            // aaa
            // aaaaaa
            // a
            // undefined
            // > data.forEach((value) => console.log(value.message.indexOf("aa")));
            // -1
            // 0
            // 0
            // -1

            // マッチしたものだけ別のから配列に追加する
            // > result = [];
            // > data.forEach((value) => { if (value.message.indexOf("aa") >= 0) { result.push(value) } });
            // > console.log(result);
            // [ { message: 'aaa' }, { message: 'aaaaaa' } ]

            fdata.push(value);
        }
    });
    return {
        data: state.data,
        message: 'find "' + f + '":',
        mode: 'find',
        fdata: fdata, // 検索したメモをまとめる配列
    };
}

function deleteReduce(state, action) {
    // .slice で各要素を取り出して新しい配列として生成し直す
    // .slice で配列を新たに作り直して、それを返すことで更新が認識され store の値が変更される
    let newdata = state.data.slice();

    // > data2
    // [
    //   { message: 'sample' },
    //   { message: 'aaa' },
    //   { message: 'aaaaaa' },
    //   { message: 'a' }
    // ]

    // splice で配列の要素を変更する
    // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // 今回は、第一引数で指定した index から 第二引数で指定した個数、要素を取り出す
    // > data2.splice(0,1);
    // [ { message: 'sample' } ]
    // > data2
    // [ { message: 'aaa' }, { message: 'aaaaaa' }, { message: 'a' } ]

    newdata.splice(action.index, 1);

    return {
        data: newdata,
        message: 'delete "' + action.index + '":',
        mode: 'delete',
        fdata: [],
    };
}

// action creator
// dispath の際に引数として渡す action を作成する関数
export function addMemo(text) {
    return {
        type: 'ADD',
        message: text,
    };
}

export function deleteMemo(num) {
    return {
        type: 'DELETE',
        index: num, // 削除するメモの index 番号
    };
}

export function findMemo(text) {
    return {
        type: 'FIND',
        find: text, // 検索テキスト
    };
}

// store を作成
export default createStore(memoReducer);
