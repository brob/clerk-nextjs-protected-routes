import Nav from "@/components/Nav";


export default function PaidCourses() {
  return (
    <>
          <h1 className="text-2xl font-bold mb-4">Paid courses</h1>
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
          </>
  );
}
