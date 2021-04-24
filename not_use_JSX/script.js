let dom = document.querySelector('#root');

// let element = React.createElement('p', {}, 'Hello');

// let element = React.createElement(
//     'p',
//     {},
//     // 内部に組み込むオブジェクト
//     'Hello React Application!'
// );


// 入れ子にすることで複雑な構造の Element を作成できる
let element = React.createElement('div', {}, [
    React.createElement('h2', {}, 'Hello'),
    React.createElement('h3', {}, 'React Sample(Not use JSX)'),
    React.createElement('ul', {}, [
        React.createElement('li', {}, 'First item'),
        React.createElement('li', {}, 'Second item'),
        React.createElement('li', {}, 'Third item'),
    ]),
]);

ReactDOM.render(element, dom);
