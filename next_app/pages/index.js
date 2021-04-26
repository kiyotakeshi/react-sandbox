// pages ディレクトリ以下にページ表示のためのスクリプトファイルを配置する
// export default () => <div>
//     <h1>Next.js</h1>
//     <div>Welcome to next.js!</div>
// </div>

// const h1 = {
//     fontSize: "72pt",
//     fontWeight: "bold",
//     textAlign: "right",
//     letterSpacing: "-8px",
//     color: "#f0f0f0",
//     margin: "-40px 0px",
// };

// const p = {
//     margin: "0px",
//     color: "#666",
//     fontSize: "16pt",
// };

// export default () => (
//     <div>
//         <h1 style={h1}>Next.js</h1>
//         <p style={p}>Welcome to next.js!</p>
//     </div>
// );

// Build-in CSS を試す
// 個別のタグのスタイルを設定するのではなく、 h1 にスタイルを適用する、といった利用方法が可能
// export default () => (
//     <div>
//         {/* JSX に埋め込むスタイルシート情報 */}
//         <style jsx>
//             {`
//                 h1 {
//                     font-size: 68pt;
//                     font-weight: bold;
//                     text-align: right;
//                     letter-spacing: -8px;
//                     color: #f0f0f0;
//                     margin: -32px 0px;
//                 }
//                 p {
//                     margin: 0px;
//                     color: #666;
//                     font-size: 16pt;
//                 }
//             `}
//         </style>
//         <h1>Next.js</h1>
//         <p>Welcome to next.js!</p>
//         <p>Build-in CSS</p>
//     </div>
// );

// 複数のファイルの利用
import Link from 'next/link';
export default () => (
    <div>
        <h1>Next.js</h1>
        <p>Welcome to next.js!</p>
        <Link href="/other">
            <a>Go to Other page</a>
        </Link>
    </div>

);
