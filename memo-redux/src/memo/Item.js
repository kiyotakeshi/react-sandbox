import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Item extends Component {
    th = {
        fontSize: '14pt',
        backgroundColor: 'blue',
        color: 'white',
        padding: '5px 10px',
        width: '50px',
    };
    td = {
        fontSize: '14pt',
        backgroundColor: 'white',
        color: 'darkblue',
        padding: '5px 10px',
        border: '1px solid lightblue',
        minWidth: '300px',
    };
    date = {
        fontSize: '14pt',
        backgroundColor: 'white',
        color: 'darkblue',
        padding: '5px 10px',
        border: '1px solid lightblue',
        width: '80px',
    };

    render() {
        // Menu component の props から渡されているので、
        // store から state を取得し、 props にマッピングする必要がない
        // <Item key="sample data" value={value} index=0 />
        // console.log(this.props); // {value: {…}, index: 0}
        let d = this.props.value.created;
        let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return (
            <tr>
                <th style={this.th}>No: {this.props.index}</th>
                <td style={this.td}>{this.props.value.message}</td>
                <td style={this.date}>{f}</td>
            </tr>
        );
    }
}

// store の値を利用しないので connect はなくてもいい
// export default connect()(Item);
export default Item;
