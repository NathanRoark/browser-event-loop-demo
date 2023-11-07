import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"

export function CustomNode(data: { label: string; job: string }) {
  return (
    <Card className="">
      <CardContent className="flex px-4 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border  bg-background text-foreground">
          <RocketIcon />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">Node</div>
          <div className="text-muted-foreground">Task</div>
        </div>
      </CardContent>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 bg-primary"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
