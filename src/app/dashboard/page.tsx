import Nav from "@/components/Nav";


export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <aside className="w-1/4 p-4 bg-gray-100">
          <Nav />
        </aside>
        <main className="w-3/4 p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <div className="bg-white p-4 rounded shadow">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Your Courses</h2>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-medium">Course 1</h3>
            <p>A description</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium">Course 2</h3>
            <p>A description</p>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}
