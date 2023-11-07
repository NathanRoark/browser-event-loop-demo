"use client"

import { Edge, Node, Position, ReactFlowProvider } from "reactflow"

import Flow from "@/components/Flow"

// this example uses some v12 features that are not released yet
const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: { label: "Node 1", job: "Start" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { label: "Node 2", job: "Start" },
    position: { x: -200, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { label: "Node 3", job: "Start" },
    position: { x: 200, y: 200 },
  },
]

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
]

export default function App() {
  const { nodes, edges } = { nodes: initialNodes, edges: initialEdges }

  return (
    <ReactFlowProvider>
      <Flow nodes={nodes} edges={edges} />
    </ReactFlowProvider>
  )
}
