import { Protect } from '@clerk/nextjs'
import articles from '../../../article-data.mjs'
import Fallback from '@/components/Fallback'
import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import ProtectedContent from '@/components/ProtectedContent'

type Params = {
    params: {
        slug: string
    }
}

export default async function Page({ params }: Params) {
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