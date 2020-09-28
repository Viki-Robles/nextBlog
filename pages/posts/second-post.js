import Head from 'next/head';
import Link from 'next/link';


export default function SecondPost() {
    return (
        <Head>
            <title>Second Post</title>
            <h2>This is the Second Post</h2>
            <Link href="/posts/first-post"><a>Back to the First Post</a></Link>
        </Head>
    )
}

