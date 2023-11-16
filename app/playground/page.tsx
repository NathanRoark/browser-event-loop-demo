"use client"

import { ReactFlowProvider } from "reactflow"

import { Flow } from "@/components/flows/initial-flow"

import { initialEdges } from "@/lib/inital-edges"
import { initialNodes } from "@/lib/inital-nodes"

export default function App() {
  // const { nodes, edges } = { nodes: initialNodes, edges: initialEdges }

  return (
    <ReactFlowProvider>
      <Flow nodes={initialNodes} edges={initialEdges} />
    </ReactFlowProvider>
  )
}
