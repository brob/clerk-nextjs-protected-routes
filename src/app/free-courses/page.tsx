import Nav from "@/components/Nav";


export default function FreeCourses() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <aside className="w-1/4 p-4 bg-gray-100">
          <Nav />
        </aside>
        <main className="w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">Free courses</h1>
          <div className="space-y-4">
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold">Article 1</h2>
              <p className="text-gray-700">Summary of the first article...</p>
            </article>
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold">Article 2</h2>
              <p className="text-gray-700">Summary of the second article...</p>
            </article>
            <article className="p-4 bg-white shadow">
              <h2 className="text-xl font-semibold">Article 3</h2>
              <p className="text-gray-700">Summary of the third article...</p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
