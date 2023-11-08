import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useAtom } from "jotai"
import { countAtom } from "@/lib/atoms"
import { useEffect, useRef } from "react"

export const EventLoopCustomNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data
  const sourcePosition = props.sourcePosition
    ? props.sourcePosition
    : Position.Bottom
  const targetPosition = props.targetPosition
    ? props.targetPosition
    : Position.Top
  const [count, setCount] = useAtom(countAtom)

  // Vercel Colors
  const colors = [
    "#29bc9b",
    "#fcd34d",
    "#f26522",
    "#e60000",
    "#0761d1",
    "#7928ca",
    "#50e3c2",
    "#f81ce5",
  ]
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pauseAnimation = () => {
    if (svgRef.current) {
      svgRef.current.pauseAnimations()
    }
  }
  const startAnimation = () => {
    if (svgRef.current) {
      svgRef.current.unpauseAnimations()
    }
  }

  useEffect(() => {
    // if count is even then pause animation
    if (count % 2 === 0) {
      pauseAnimation()
    } else {
      startAnimation()
    }
  }, [count])

  return (
    <Card>
      <CardContent className="flex px-4 py-2">
        <svg
          className="h-48 w-48"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          ref={svgRef}
        >
          <circle
            fill="#000"
            stroke="#ccc"
            stroke-width="2"
            cx="50"
            cy="50"
            r="44"
          />
          <circle
            fill="#111"
            stroke-width="3"
            cx="8"
            cy="54"
            r="6"
            stroke={colors[count % colors.length]}
          >
            <animateTransform
              attributeName="transform"
              dur="4s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div className="ml-2">
          <div className="text-lg font-bold">{label}</div>
          <div className="text-muted-foreground">{job}</div>
          <div className="text-muted-foreground">{count}</div>
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
