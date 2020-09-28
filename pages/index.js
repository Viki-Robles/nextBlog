import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from './styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Vicky</p>
        <p>I am a Backend Engineer at Brezaa</p>
      </section>
      <Link href='/posts/first-post'>Go to the first Post</Link>
    </Layout>
  )
}
