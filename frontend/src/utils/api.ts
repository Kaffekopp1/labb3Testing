import { ArticleInterface } from '../types'

export const api = {
  fetchArticle: async (): Promise<ArticleInterface[]> => {
    const response = await fetch('/api')
    if (!response.ok) throw new Error('Failed to fetch article')
    return response.json()
  },
}
