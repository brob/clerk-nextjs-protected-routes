import { Chart1 } from '@/components/Chart1';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { currentUser } from '@clerk/nextjs/server'




export default async function Dashboard() {
    const user = await currentUser()

    return (
    <div className="space-y-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium">Account Overview</h2>
            </CardHeader>
            <CardContent>
              <p><strong>Member since:</strong> {new Date(user?.createdAt).toDateString()}</p>
              <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
            <p><strong>Email:</strong> {user?.emailAddresses[0].emailAddress ? user.emailAddresses[0].emailAddress : 'N/A'}</p>
            </CardContent>
            </Card>
        <Chart1 />
        </div>
  );
}
