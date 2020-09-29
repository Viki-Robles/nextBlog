import Head from "next/head";
import Layout, { siteTitle } from "./layout";
import utilStyles from "./styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import dynamic from "next/dynamic";
const DateComponent = dynamic(() => import("../components/date/date"));

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Vicky</p>
        <p>I am a Backend Engineer at Brezaa</p>
        <DateComponent dateString={allPostsData[0].date} />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Link href="/posts/first-post">Go to the first Post</Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
