import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8 ">
        <PageHeaderHeading className="flex items-center justify-center italic">
          <div className="block ">
            <Icons.logo
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
              fill="currentColor"
            />
          </div>
          <a className="flex flex-col">
            <span className="text-4xl font-black sm:text-6xl lg:text-8xl xl:text-9xl">
              Natloop
            </span>
          </a>
        </PageHeaderHeading>
        <PageHeaderDescription className="text-base sm:pl-2 md:pl-8 ">
          <p className="py-2 text-xl sm:text-2xl lg:text-4xl">
            Browser Event Loop Playground
          </p>
          <p className="py-2">
           This is a playground for the browser event loop. It is a tool to help you understand how the browser event loop works.
          </p>
          <p className="py-2">
            This app is built with ReactFlow and Next.js.
          </p>
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8  pt-4 sm:pl-8 md:pb-10 lg:pt-8">
          <Link href="/playground" className={buttonVariants()}>
            Playground
          </Link>
          <Link
            href="/about"
            className={buttonVariants({ variant: "outline" })}
          >
            About
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
