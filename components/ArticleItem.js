import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ data }) => {
    return (
        <Link href={`/article/${data.id}`}>
            <div className={articleStyles.card}>
                <h3>{data.title} &rarr;</h3>
                <p>{data.body}</p>
            </div>
        </Link>
    )
}

export default ArticleItem;