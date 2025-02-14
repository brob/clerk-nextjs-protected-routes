"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", course1: 186, course2: 80 },
  { month: "February", course1: 305, course2: 200 },
  { month: "March", course1: 237, course2: 120 },
  { month: "April", course1: 73, course2: 190 },
  { month: "May", course1: 209, course2: 130 },
  { month: "June", course1: 214, course2: 140 },
]

const chartConfig = {
    course1: {
    label: "Course 1",
    color: "hsl(var(--chart-1))",
  },
  course2: {
    label: "Course 2",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course time - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="course1" fill="var(--color-course1)" radius={4} />
            <Bar dataKey="course2" fill="var(--color-course2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
