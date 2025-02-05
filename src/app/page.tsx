import Nav from "@/components/Nav";
import Link from "next/link";


export default function Home() {
  return (
    <div className="not-prose">
          <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
          <div className="space-y-4">
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold"><Link href="/dashboard">The locked dashboard</Link></h2>
              <p className="text-gray-700">Account information and plans if you're logged in.</p>
            </article>
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold"><Link href="/paid-courses">Paid Courses</Link></h2>
              <p className="text-gray-700">Courses for people logged in.</p>
            </article>
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold"><Link href="/articles">Some free and some locked articles</Link></h2>
              <p className="text-gray-700">Summary of the third article...</p>
            </article>
          </div>
        </div>
  );
}
