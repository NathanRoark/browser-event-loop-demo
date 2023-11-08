"use client"

import { Edge, Node, Position, ReactFlowProvider } from "reactflow"

import Flow from "@/components/Flow"

// this example uses some v12 features that are not released yet
const initialNodes: Node[] = [
  {
    id: "0",
    type: "event_loop_node",
    data: { label: "Event Loop", job: "loop" },
    position: { x: 0, y: 100 },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "1",
    type: "custom_node",
    data: { label: "Node 1", job: "Render Frame" },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "2",
    type: "custom_node",
    data: { label: "Node 2", job: "Update State" },
    position: { x: -300, y: 200 },
  },
  {
    id: "3",
    type: "custom_node",
    data: { label: "Node 3", job: "Update Styles" },
    position: { x: 0, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "4",
    type: "event_node",
    data: { label: "Node 4", job: "Update DOM" },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
  },
]

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-1", source: "4", target: "1", animated: true },
]

export default function App() {
  const { nodes, edges } = { nodes: initialNodes, edges: initialEdges }

  return (
    <ReactFlowProvider>
      <Flow nodes={nodes} edges={edges} />
    </ReactFlowProvider>
  )
}
