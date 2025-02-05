import { Protect } from '@clerk/nextjs'
import articles from '../../../article-data.mjs'
import Fallback from '@/components/Fallback'
import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

function ProtectedContent({isProtected, teaser, children}) {
    
    if (!isProtected) return children

    return (
        <>
            { isProtected && <div dangerouslySetInnerHTML={{ __html: teaser }} />}
            <Protect fallback={<Fallback />}>{children}</Protect>
        </>
    )
}

export default async function Page({ params }) {
    const slug = (await params).slug
    const article = await articles.find((article:string) => article.slug === slug)
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