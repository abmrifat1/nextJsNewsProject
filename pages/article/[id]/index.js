import Link from "next/link";

const article = ({ article }) => {
    return (
        <div>
            <h1>{article.id}. {article.title}</h1>
            <p>{article.body}</p>
            <Link href='/'>Go back</Link>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props : {
//             article
//         }
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();

    const ids = articles.map(el => el.id);
    const paths = ids.map(el => (
        {
            params: {
                id: el.toString()
            }
        }
    ))

    return {
        paths,
        fallback: false
    }
}

export default article;
