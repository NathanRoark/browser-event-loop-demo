import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAtom, useAtomValue } from "jotai"
import {
  renderEventCountAtom,
  showingRenderingAnimationAtom,
} from "@/lib/atoms"

export const RenderEventNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data
  const { sourcePosition } = {
    sourcePosition: props.sourcePosition
      ? props.sourcePosition
      : Position.Bottom,
  }
  const [count, setCount] = useAtom(renderEventCountAtom)
  const renderingAnimation = useAtomValue(showingRenderingAnimationAtom)

  function handleClick() {
    if (count <= 0 && !renderingAnimation) {
      setCount(count + 1)
    }
  }

  return (
    <Card>
      <CardContent className="flex px-4 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-foreground">
          <RocketIcon />
        </div>
        <div className="ml-2  max-w-[12rem]">
          <h1 className="text-lg font-bold">{label}</h1>
          <h4 className="pb-1 text-sm text-muted-foreground">{job}</h4>
          <Button onClick={handleClick} variant="outline">
            Add
          </Button>
        </div>
      </CardContent>

      <Handle
        type="source"
        position={sourcePosition}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
