import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import { countAtom } from "@/lib/atoms"
export const EventNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data
  const { sourcePosition, targetPosition } = {
    sourcePosition: props.sourcePosition
      ? props.sourcePosition
      : Position.Bottom,
    targetPosition: props.targetPosition ? props.targetPosition : Position.Top,
  }
  const [count, setCount] = useAtom(countAtom)

  return (
    <Card>
      <CardContent className="flex px-4 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border  bg-background text-foreground">
          <RocketIcon />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{label}</div>
          <div className="text-muted-foreground">{job}</div>
          <Button
            onClick={() => setCount(count + 1)}
            variant="outline"
            className="ml-auto"
          >
            Add
          </Button>
        </div>
      </CardContent>

      <Handle
        type="target"
        position={targetPosition}
        className="w-16 bg-primary"
      />
      <Handle
        type="source"
        position={sourcePosition}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
