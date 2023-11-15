import { Handle, NodeProps, Position } from "reactflow"
import { Card, CardContent } from "@/components/ui/card"
import { useAtom, useAtomValue } from "jotai"
import {
  jsEventCountAtom,
  renderEventCountAtom,
  showingRenderingAnimationAtom,
} from "@/lib/atoms"
import { useEffect, useRef, useState } from "react"

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

  // New state variables for cx and cy
  const [cx, setCx] = useState(50)
  const [cy, setCy] = useState(50)

  const [pi, setPi] = useState(0)
  const [pi2, setPi2] = useState(0)

  useEffect(() => {
    const radius = 40 // Radius of the circle's path
    const centerX = 50
    const centerY = 50
    let angle = 0 // Starting angle

    const interval = setInterval(() => {
      // Update angle
      angle = (angle + 1) % 360

      // Calculate new position
      const radian = (angle * Math.PI) / 180
      const newCx = centerX + radius * Math.cos(radian)
      const newCy = centerY + radius * Math.sin(radian)

      // Update state
      setCx(newCx)
      setCy(newCy)

      // Update angle triggers
      if (angle == 180) {
        setPi((prev) => prev + 1)
      } else if (angle == 0) {
        setPi2((prev) => prev + 1)
      }
    }, 10) // Update every 10ms for smooth enough animation

    return () => clearInterval(interval)
  }, [])

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
        <svg className="h-60 w-60" viewBox="0 0 100 100" ref={svgRef}>
          <circle
            stroke="#ccc"
            strokeWidth="2"
            cx="50"
            cy="50"
            r="40"
            className=""
          />
          <circle
            strokeWidth="2"
            cx={cx}
            cy={cy}
            r="6"
            stroke="#ccc"
            ref={circleRef}
          />
          {/* line at 2 pi to represent a render step */}
          <line
            x1="100"
            y1="50"
            x2="80"
            y2="50"
            stroke="#0761d1"
            strokeWidth="6"
          />
          {/* line at pi to represent js step */}
          <line
            x1="0"
            y1="50"
            x2="20"
            y2="50"
            stroke="#fcd34d"
            strokeWidth="6"
          />
        </svg>
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
          <div className="font-mono">1 pi: {pi}</div>
          <div className="font-mono">2 pi: {pi2}</div>
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
