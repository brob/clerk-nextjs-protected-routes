import { Protect } from "@clerk/nextjs"
import Fallback from '@/components/Fallback'

export default function ProtectedContent({ isProtected, teaser, children }: { isProtected: boolean, teaser?: string, children: React.ReactNode }) {
    
    if (!isProtected) return children

    return (
        <>
            { isProtected && teaser && <div dangerouslySetInnerHTML={{ __html: teaser }} />}
            <Protect fallback={<Fallback />}>{children}</Protect>
        </>
    )
}
