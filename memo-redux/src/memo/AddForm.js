import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
    input = {
        fontSize: '16pt',
        color: '#006',
        padding: '1px',
        margin: '5px 0px',
    };
    btn = {
        fontSize: '14pt',
        color: '#006',
        padding: '2px 10px',
    };

    constructor(props) {
        super(props);
        this.state = {
            message: '', // 初回レンダリング時は入力欄は空
        };
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        // console.log(e); // SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: input, …}
        // console.log(e.target); // <input type="text" size="40" required="" value="aaaa" style="font-size: 16pt; color: rgb(0, 0, 102); padding: 1px; margin: 5px 0px;">

        // state を更新し、再描画することで、画面上の入力フォームの値も表示される
        this.setState({
            message: e.target.value,
        });
        // console.log(this.state); // {message: ""} 入力するたびに state が更新される
    }

    doAction(e) {
        e.preventDefault(); // フォームの内容を送信する動作を妨げる(行わない)

        // action creator(disptch の際に引数として渡す action を作成する関数) を呼び出す
        let action = addMemo(this.state.message);
        // console.log(action); // {type: "ADD", message: "aa"}
        this.props.dispatch(action);

        this.setState({
            message: '', // メモ追加後の message は空に戻しておく
        });
    }

    render() {
        // console.log(this.props); // {data: Array(1), message: "please type message:", mode: "default", fdata: Array(0), dispatch: ƒ}
        // console.log("render"); // 入力内容を変更するごとに onChange が走り、 再描画される
        return (
            <div>
                <p>{this.props.message}</p>
                <form onSubmit={this.doAction}>
                    <input
                        type="text"
                        size="40"
                        onChange={this.doChange}
                        style={this.input}
                        value={this.state.message}
                        required
                    />
                    <input type="submit" style={this.btn} value="Add" />
                </form>
            </div>
        );
    }
}

// store にある state の内容を props に mapping
export default connect((state) => state)(AddForm);
