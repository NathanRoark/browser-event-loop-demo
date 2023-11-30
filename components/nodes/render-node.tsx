import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import {
  renderSubnodeAtom,
  renderEventCountAtom,
  showingRenderingAnimationAtom,
} from "@/lib/atoms"
import { useAtom, useAtomValue } from "jotai"
import { Button } from "../ui/button"

export const RenderNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data
  const { sourcePosition, targetPosition } = {
    sourcePosition: props.sourcePosition
      ? props.sourcePosition
      : Position.Bottom,
    targetPosition: props.targetPosition ? props.targetPosition : Position.Top,
  }
  const [renderEventCount, setRenderEventCount] = useAtom(renderEventCountAtom)
  const [showRenderEvent, setShowRenderEvent] = useAtom(renderSubnodeAtom)
  const [showingRenderingAnimation, setShowingRenderingAnimation] = useAtom(
    showingRenderingAnimationAtom
  )

  return (
    <Card>
      <CardContent className="flex h-96 w-[28rem] flex-col ">
        <div className="flex h-96 w-[28rem] pb-2 pt-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-foreground">
            <RocketIcon />
          </div>
          <div className="item-center ml-4 flex h-12 w-12 flex-col items-center justify-center">
            <div className="text-lg font-bold">{label}</div>
          </div>
        </div>
        <Button
          className="mt-2 max-w-[6rem]"
          variant={"outline"}
          onClick={() => {
            if (showRenderEvent === 0 && renderEventCount > 0) {
              setShowRenderEvent(1)
            } else if (showRenderEvent > 0 && showRenderEvent < 3) {
              setShowRenderEvent((prev) => prev + 1)
            } else {
              setShowingRenderingAnimation(false)
              setShowRenderEvent(0)
            }
          }}
        >
          Step
        </Button>
      </CardContent>
      <Handle
        type="target"
        position={targetPosition}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
