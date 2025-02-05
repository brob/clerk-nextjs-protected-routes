import Link from 'next/link';
import Articles from '../../article-data.mjs'

export default function FreeCourses() {
  return (
    <div className="not-prose">
          <h1 className="text-4xl font-bold mb-4">Free courses</h1>
          <div className="space-y-4">
            {Articles.map((article, index) => (
              <article key={index} className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold">
                <Link href={`/paid-courses/${article.slug}`}>{article.title}{article.isProtected && " (Locked)"}{article.fullLock && " (Full lock)"}</Link>
              </h2>
              <p className="text-gray-700">{article.description}</p>
              </article>
            ))}
            </div>
       </div>   
  );
}
