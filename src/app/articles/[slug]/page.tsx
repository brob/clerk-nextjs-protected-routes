import articles from '../../../article-data.mjs'
import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import ProtectedContent from '@/components/ProtectedContent'

interface PageProps {
    params: Promise<{
      slug: string;
    }>
  }

export default async function Page({ params }: PageProps) {
    const slug = (await params).slug
    const article = await articles.find((article: any) => article.slug === slug)
    if (!article) return notFound()
    if (article.fullLock) return await auth.protect()
    return (
        <div>
            <h1>{article.title}</h1>
            <ProtectedContent isProtected={article.isProtected} teaser={article.teaser}>
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
            </ProtectedContent>
        </div>
    )
}