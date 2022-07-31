import ArticleItem from '../components/ArticleItem';

const ArticleList = ({ data }) => {
    return (
        <div>
            {data.map(el => (
                <div key={el.id}>
                    <ArticleItem data={el}/>
                </div>
            ))}
        </div>
    )
}

export default ArticleList;