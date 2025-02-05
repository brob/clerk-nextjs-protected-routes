import { SignInButton } from "@clerk/nextjs";

export default function Fallback() {
    return (
        <div className="flex flex-col items-center justify-center py-5 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">This is a paid article</h1>
            <p className="text-lg mb-6">You need to be signed in to view this page</p>
            <SignInButton mode="modal"><button  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign In</button></SignInButton>
        </div>
    )
}