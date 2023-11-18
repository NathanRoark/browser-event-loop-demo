import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import { jsEventCountAtom } from "@/lib/atoms"

function JSCountComponent({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <div
      className="mb-1 mr-1 rounded-md bg-[#094ea3] p-2"
      key={"js-event-" + index}
    >
      Message
    </div>
  ))
}

export const QueueNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data

  const [count, setCount] = useAtom(jsEventCountAtom)

  return (
    <Card>
      <CardContent className="flex h-96 w-72 justify-between px-4 py-2">
        <div>
          <div className="h-full overflow-y-hidden p-2 font-semibold">
            <JSCountComponent count={count} />
          </div>
        </div>
        <div className="ml-2">
          <h1 className="text-lg font-bold">{label}</h1>
          <h4 className="pb-1 text-sm text-muted-foreground">{job}</h4>
          <Button onClick={() => setCount(count + 1)} variant="outline">
            Add Message
          </Button>
        </div>
      </CardContent>

      <Handle
        position={Position.Right}
        type="source"
        className="w-16 bg-primary"
      />
    </Card>
  )
}
