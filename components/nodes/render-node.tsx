import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"

export const RenderNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data
  const { sourcePosition, targetPosition } = {
    sourcePosition: props.sourcePosition
      ? props.sourcePosition
      : Position.Bottom,
    targetPosition: props.targetPosition ? props.targetPosition : Position.Top,
  }

  return (
    <Card>
      <CardContent className="flex h-96 w-96 px-4 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-foreground">
          <RocketIcon />
        </div>
        <div className="item-center ml-4 flex h-12 w-12 items-center justify-center">
          <div className="text-lg font-bold">{label}</div>
        </div>
      </CardContent>
      <Handle
        type="target"
        position={targetPosition}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
