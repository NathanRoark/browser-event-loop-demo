import { RocketIcon } from "@radix-ui/react-icons"
import { NodeProps } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { renderSubnodeAtom } from "@/lib/atoms"
import { cn } from "@/lib/utils"

export const RenderSubnode: React.FC<NodeProps> = (props) => {
  const { label, description } = props.data

  const count = useAtomValue(renderSubnodeAtom)

  const [borderColor, setBorderColor] = useState("")

  useEffect(() => {
    if (count == 1 && label == "Style") {
      setBorderColor("border-blue-600")
    } else if (count == 2 && label == "Layout") {
      setBorderColor("border-blue-600")
    } else if (count == 3 && label == "Paint") {
      setBorderColor("border-blue-600")
    } else {
      setBorderColor("")
    }
  }, [count, label])

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
