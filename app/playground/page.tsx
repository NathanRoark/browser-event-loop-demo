"use client"

import { Edge, Node, Position, ReactFlowProvider } from "reactflow"

import Workflow from "@/components/workflows/initial-workflow"

const initialNodes: Node[] = [
  {
    id: "0",
    type: "event_loop_node",
    data: { label: "Event Loop" },
    position: { x: 0, y: 200 },
  },
  {
    id: "1",
    type: "js_event_node",
    data: { label: "JS Event", job: "Add Task" },
    position: { x: -50, y: 0 },
    sourcePosition: Position.Bottom,
  },
  {
    id: "2",
    type: "render_node",
    data: { label: "Render" },
    position: { x: 0, y: 500 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
  },
  {
    id: "3",
    type: "render_event_node",
    data: { label: "Request Animation Frame", job: "requestAnimationFrame()" },
    position: { x: 300, y: -200 },
    sourcePosition: Position.Bottom,
  },
  {
    id: "4",
    type: "render_subnode",
    data: {
      label: "Style",
      description: "combine the DOM and CSSOM into a render tree",
    },
    position: { x: 75, y: 60 },
    sourcePosition: Position.Bottom,
    parentNode: "2",
  },
  {
    id: "5",
    type: "render_subnode",
    data: {
      label: "Layout",
      description:
        "determine the dimensions and location of all the nodes in the render tree",
    },
    position: { x: 75, y: 160 },
    sourcePosition: Position.Bottom,
    parentNode: "2",
  },
  {
    id: "6",
    type: "render_subnode",
    data: {
      label: "Paint",
      description: "paint the individual nodes to the screen",
    },
    position: { x: 75, y: 280 },
    sourcePosition: Position.Bottom,
    parentNode: "2",
  },
  {
    id: "7",
    type: "render_event_node",
    data: {
      label: "DOM or CSSOM Update",
      job: "there is a need to update the content rendered on the page",
    },
    position: { x: 0, y: -200 },
    sourcePosition: Position.Bottom,
  },
]

const initialEdges: Edge[] = [
  {
    id: "e1-0",
    source: "1",
    target: "0",
    targetHandle: "top-left-target",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: "#fcd34d",
    },
  },
  {
    id: "e0-2",
    source: "0",
    target: "2",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: "#0761d1",
    },
  },
  {
    id: "e3-0",
    source: "3",
    target: "0",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: "#f81ce5",
    },
  },
  {
    id: "e7-0",
    source: "7",
    target: "0",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: "#f81ce5",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
  },
]

export default function App() {
  const { nodes, edges } = { nodes: initialNodes, edges: initialEdges }

  return (
    <ReactFlowProvider>
      <Workflow nodes={nodes} edges={edges} />
    </ReactFlowProvider>
  )
}
