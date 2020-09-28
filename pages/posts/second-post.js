import Head from 'next/head';
import Link from 'next/link';


export default function MyPost() {
    return (
        <Head>
            <h2>This is the Second Post</h2>
            <Link href='/posts/first-post'><a>Back to the First Post</a></Link>
        </Head>
    )
}

