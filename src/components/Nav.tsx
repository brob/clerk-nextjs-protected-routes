


export default function Nav() {
    return (
        <nav>
            <ul>
              <li className="mb-2">
                <a href="/dashboard" className="text-blue-500">Dashboard</a>
                <ul className="pl-2 mt-1 mb-4">
                    <li><a href="/dashboard/plan" className="text-blue-500">My Plan</a></li>
                </ul>   
              </li>
              <li className="mb-2">
                <a href="/paid-courses" className="text-blue-500">Paid Courses</a>
              </li>
              <li className="mb-2">
                <a href="/articles" className="text-blue-500">Free Courses</a>
              </li>
            </ul>
          </nav>

    )
}