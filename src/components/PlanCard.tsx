import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Lock } from "lucide-react";
import Link from "next/link"

  
export default function ArticleCard({title, description, price, children, ...props} : {title: string, description: string, price: string, children: React.ReactNode, [key: string]: any}) {

    return (<Card {...props}>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
        {children}
    </CardContent>
    <CardFooter>
        <p>{price}</p>
    </CardFooter>
</Card>)
}