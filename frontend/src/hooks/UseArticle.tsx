import { api } from '../utils/api'
import { ArticleInterface } from '../types'
import { useCallback, useState } from 'react'

export const useArticle = () => {
  const [getArticle, setArticle] = useState<ArticleInterface[]>([])

  const fetchArticle = useCallback(async () => {
    const data = await api.fetchArticle()
    setArticle(data)
  }, [])

  return { getArticle, fetchArticle }
}
