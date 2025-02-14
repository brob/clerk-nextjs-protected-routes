import Link from 'next/link'
import Articles from '../../article-data.mjs'
import ArticleCard from '@/components/ArticleCard';



export default function FreeCourses() {
  return (
    <div className="not-prose">
          <h1 className="text-4xl font-bold mb-4">Free courses</h1>
          <div className="grid grid-cols-2 gap-4">
            {Articles.map((article, index) => (
                <ArticleCard key={index} article={article} title={article.title} description={article.description} slug={article.slug} locked={article.fullLock || false} isProtected={article.isProtected} />
            ))}
            </div>
       </div>   
  );
}
