import { currentUser } from '@clerk/nextjs/server'




export default async function Dashboard() {
    const user = await currentUser()

  return (
    <>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <div className="bg-white p-4 rounded shadow">
            <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
            <p><strong>Email:</strong> {user?.emailAddresses[0].emailAddress ? user.emailAddresses[0].emailAddress : 'N/A'}</p>
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
        </>
  );
}
