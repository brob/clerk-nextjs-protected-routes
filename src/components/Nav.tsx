import Link from "next/link";



export default function Nav() {
    return (
        <nav>
            <ul>
              <li className="mb-2">
                <Link href="/dashboard" className="text-blue-500">Dashboard</Link>
                <ul className="pl-2 mt-1 mb-4">
                    <li><Link href="/dashboard/plan" className="text-blue-500">My Plan</Link></li>
                </ul>   
              </li>
              <li className="mb-2">
                <Link href="/paid-courses" className="text-blue-500">Paid Courses</Link>
              </li>
              <li className="mb-2">
                <Link href="/articles" className="text-blue-500">Free Courses</Link>
              </li>
            </ul>
          </nav>

    )
}