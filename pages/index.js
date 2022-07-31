import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, progrmming' />
      </Head>
      <h1>Home</h1>
      <ArticleList data={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
