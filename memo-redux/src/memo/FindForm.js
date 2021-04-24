import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

class FindForm extends Component {
    input = {
        fontSize: '14pt',
        color: '#006',
        padding: '0px',
    };
    btn = {
        fontSize: '12pt',
        color: '#006',
        padding: '1px 10px',
    };

    constructor(props) {
        super(props);
        this.state = {
            find: '',
        };
        // console.log(this.state); // {find: ""}
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        // state を更新し、再描画することで、画面上の検索入力欄の値も更新される
        this.setState({
            find: e.target.value,
        });
        // console.log(this.state); // {find: ""}
    }

    doAction(e) {
        e.preventDefault();  // フォームの内容を送信する動作を妨げる(行わない)
        // action creator を呼び出す
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render() {
        return (
            <form onSubmit={this.doAction}>
                <input
                    type="text"
                    size="10"
                    onChange={this.doChange}
                    style={this.input}
                    value={this.state.find}
                    // value={this.state.message} これでもフォームに入力値が表示される謎
                />
                <input type="submit" style={this.btn} value="Find" />
            </form>
        );
    }
}
export default connect((state) => state)(FindForm);
