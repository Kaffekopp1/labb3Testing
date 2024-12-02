import { useArticle } from '../hooks/UseArticle'
import { useEffect } from 'react'

const ArticleCard = () => {
  const { getArticle, fetchArticle } = useArticle()

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <div>
      {getArticle.map((article) => (
        <div key={article.id}>
          <h2>{article.article_author}</h2>
          <p>{article.article_text}</p>
        </div>
      ))}
    </div>
  )
}
export default ArticleCard
