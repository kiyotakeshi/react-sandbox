import React, { Component } from 'react';

class Counter extends Component {

    msg = {
        backgroundColor: 'gray',
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            msg: 'counter: 0',
        };
        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        this.setState((state) => {
            const num = state.counter + 1;
            return {
                counter: num,
                msg: 'counter: ' + num,
            };
        });
    }

    render() {
        return (
            <p onClick={this.doAction} style={this.msg}>
                {this.state.msg}
            </p>
        );
    }
}

export default Counter;
