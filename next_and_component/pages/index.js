import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () => (
    <Layout header="Next" title="Top page.">
        <p>Welcome to next.js!</p>
        <Image fname="azarashi.jpeg" size="300" />
        <hr />
        <Link href="./other">
            <button>go to Other</button>
        </Link>
    </Layout>
);
