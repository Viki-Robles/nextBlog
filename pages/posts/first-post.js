import Link from "next/link";
import Head from "next/head";
import Layout from "../layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </h2>
      <h4>
        <Link href="/posts/second-post">
          <a>Click here for the Second Post</a>
        </Link>
      </h4>
    </Layout>
  );
}
