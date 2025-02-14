import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Lock } from "lucide-react";
import Link from "next/link"

  
export default function ArticleCard({title, description, article, slug, locked, isProtected} : {title: string, description: string, article: any, slug: string, locked: boolean, isProtected: boolean}) {
  const isLocked = locked || isProtected
  const fullLocked = locked;
  return (<Card>
  <CardHeader>
    <CardTitle><Link href={`/articles/${slug}`}>{title}</Link></CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  
  <CardFooter>
  <p className="flex gap-2 text-sm text-grey-400 items-center">
    {isLocked ? (<><Lock size={16} className="inline-block"  /> Sign in to view</>) : "(Unlocked)"}
  </p>
  </CardFooter>
</Card>)
}