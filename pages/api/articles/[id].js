import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
    const data = articles.filter(el => el.id == id);

    if (data && data.length > 0) {
        res.status(200).json(data[0])
    } else {
        res.status(404).json({
            message: `Article for id:${id} not found!`
        })
    }
}