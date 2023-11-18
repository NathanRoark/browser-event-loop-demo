import { NodeProps, Position, Handle } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useAtomValue } from "jotai"
import { jsEventCountAtom } from "@/lib/atoms"
import { useState, useEffect, use } from "react"

function StackSizeComponent({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <div
      className="mb-1 mr-1 rounded-md bg-yellow-500 px-8 py-2"
      key={"js-event-" + index}
    ></div>
  ))
}

export const StackNode: React.FC<NodeProps> = (props) => {
  const currentCount = useAtomValue(jsEventCountAtom)
  const [prevCount, setPrevCount] = useState(0)
  const [stackSize, setStackSize] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStackSize((prevSize) => prevSize - 1)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  function handleStackSize() {
    const newStackSize = Math.floor(Math.random() * 12) + 8
    setStackSize(newStackSize)
  }

  function handleJSEvent() {
    console.log("stack size", stackSize)
    if (stackSize <= 0) {
      handleStackSize()
    }
  }

  useEffect(() => {
    if (currentCount < prevCount) {
      handleJSEvent()
    }
    setPrevCount(currentCount)
  }, [currentCount])

  return (
    <Card>
      <CardContent className="flex h-96 w-72 justify-between px-4 py-2">
        <div>
          {/* <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-foreground">
            <RocketIcon />
          </div> */}
          <div className=" p-2 font-semibold">
            <div
              className="mb-1 mr-1 rounded-md bg-yellow-500 "
              key={"js-event-" + "index"}
            />
            <StackSizeComponent count={stackSize} />
          </div>
        </div>
        <div className="ml-2">
          <h1 className="text-lg font-bold">Stack</h1>
          <h4 className="pb-1 text-sm text-muted-foreground">Frame Stack</h4>
        </div>
      </CardContent>
      <Handle
        type="target"
        position={Position.Right}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
