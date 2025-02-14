import Link from 'next/link';
import Articles from '../../article-data.mjs'
import ArticleCard from '@/components/ArticleCard';
export default function FreeCourses() {
  return (
    <div className="not-prose">
          <h1 className="text-4xl font-bold mb-4">Paid courses</h1>
          <div className="space-y-4">
            {Articles.map((article, index) => (
                <ArticleCard key={index} article={article} title={article.title} description={article.description} slug={article.slug} locked={article.fullLock || false} isProtected={article.isProtected} />
            ))}
            </div>
       </div>   
  );
}
