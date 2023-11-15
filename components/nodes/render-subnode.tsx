import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { renderEventCountAtom } from "@/lib/atoms"
import { cn } from "@/lib/utils"

export const RenderSubnode: React.FC<NodeProps> = (props) => {
  const { label, description } = props.data

  const count = useAtomValue(renderEventCountAtom)

  const [borderColor, setBorderColor] = useState("")

  useEffect(() => {
    if (count == 0) {
      if (label == "Style") {
        setBorderColor("border-blue-600")
        // set to "" after 1 second
        setTimeout(() => setBorderColor(""), 1000)
      } else if (label == "Layout") {
        // set to blue after 1 second
        setTimeout(() => setBorderColor("border-blue-600"), 1000)
        // set to "" after 2 seconds
        setTimeout(() => setBorderColor(""), 2000)
      } else if (label == "Paint") {
        // set to blue after 2 seconds
        setTimeout(() => setBorderColor("border-blue-600"), 2000)
        // set to "" after 3 seconds
        setTimeout(() => setBorderColor(""), 3000)
      }
    } else {
      setBorderColor("")
    }
  }, [count])

  return (
    <Card className={cn(borderColor)}>
      <CardContent className="flex px-4 py-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-foreground">
          <RocketIcon />
        </div>
        <div className="ml-2  max-w-[12rem]">
          <h1 className="text-lg font-bold">{label}</h1>
          <h4 className="pb-1 text-sm text-muted-foreground">{description}</h4>
        </div>
      </CardContent>
    </Card>
  )
}
