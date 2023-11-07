import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  return (
    <div className="container relative pb-8">
      <PageHeader className="pb-8">
        <PageHeaderHeading>About this app</PageHeaderHeading>
        <PageHeaderDescription>
          This app was built as a project for my CS 690 Advanced Operating Systems class at The University of Alabama in Huntsville.
        </PageHeaderDescription>
      </PageHeader>
    </div>
  )
}
