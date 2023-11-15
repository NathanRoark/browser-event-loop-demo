import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useAtom, useAtomValue } from "jotai"
import {
  jsEventCountAtom,
  renderEventCountAtom,
  showingRenderingAnimationAtom,
} from "@/lib/atoms"
import { useEffect, useRef } from "react"

export const EventLoopCustomNode: React.FC<NodeProps> = (props) => {
  const { label, job } = props.data

  const [jsEventCount, setJSEventCount] = useAtom(jsEventCountAtom)
  const [renderEventCount, setRenderEventCount] = useAtom(renderEventCountAtom)
  const showingRenderingAnimation = useAtomValue(showingRenderingAnimationAtom)

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
  const circleRef = useRef<SVGCircleElement | null>(null)

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

  // trigger an event when the circle is at pi or 2pi
  useEffect(() => {
    const interval = setInterval(() => {
      if (jsEventCount > 0) {
        setJSEventCount((prev) => prev - 1)
      }
    }, 2000) // time in ms minus the distance the circle is from pi
    return () => clearInterval(interval)
  }, [jsEventCount])

  useEffect(() => {
    const interval = setInterval(() => {
      if (renderEventCount > 0) {
        setRenderEventCount((prev) => prev - 1)
      }
    }, 2000) // time in ms minus the distance the circle is from pi
    return () => clearInterval(interval)
  }, [renderEventCount])

  // print the current angle of the circle
  useEffect(() => {
    const angle = circleRef.current?.getAttribute("transform")
    console.log(angle)
  }, [jsEventCount])

  return (
    <Card>
      <CardContent className="bg-Background flex p-4">
        <div>
          <>
            {[...Array(jsEventCount)].map((i) => (
              <div
                className="mb-1 mr-1 h-4 w-4 rounded-full bg-[#fcd34d]"
                key={"js-event-" + i}
              ></div>
            ))}
            <div className="mb-1 mr-1 h-4 w-4"></div>
          </>
        </div>
        <div>
          <svg
            className="bg-Background h-48 w-48"
            viewBox="0 0 100 100"
            ref={svgRef}
          >
            <circle
              stroke="#ccc"
              strokeWidth="2"
              cx="50"
              cy="50"
              r="44"
              fill="Background"
            />
            <circle
              strokeWidth="3"
              cx="8"
              cy="54"
              r="6"
              stroke="#ccc"
              ref={circleRef}
            >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        <div>
          <>
            {[...Array(renderEventCount)].map((i) => (
              <div
                className="mb-1 mr-1 h-4 w-4 rounded-full bg-[#0761d1]"
                key={"js-event-" + i}
              ></div>
            ))}
            <div className="mb-1 mr-1 h-4 w-4"></div>
          </>
        </div>
        <div className="ml-4 pr-2">
          <div className="text-lg font-bold">{label}</div>
          {/* <div className="text-muted-foreground">JS Events: {jsEventCount}</div>
          <div className="text-muted-foreground">
            Render Events: {renderEventCount}
          </div> */}
        </div>
      </CardContent>

      <Handle
        id="top-right-target"
        type="target"
        position={Position.Top}
        className="w-16 bg-primary"
        style={{ left: "75%" }}
      />
      <Handle
        id="top-left-target"
        type="target"
        position={Position.Top}
        className="w-16 bg-primary"
        style={{ left: "25%" }}
      />
      <Handle
        id="bottom-source"
        type="source"
        position={Position.Bottom}
        className="w-16 bg-primary"
      />
    </Card>
  )
}
