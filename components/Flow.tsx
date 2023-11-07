"use client"

import { useCallback, useState } from "react"
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Background,
  Controls,
} from "reactflow"

import "reactflow/dist/style.css"

import { CustomNode } from "./card-node"

const nodeTypes = {
  custom: CustomNode,
}

export default function App({
  nodes: initNodes,
  edges: initEdges,
}: {
  nodes: Node[]
  edges: Edge[]
}) {
  const [nodes, setNodes] = useState<Node[]>(initNodes)
  const [edges, setEdges] = useState<Edge[]>(initEdges)

  const onNodesChange: OnNodesChange = useCallback(
    (chs) => {
      setNodes((nds) => applyNodeChanges(chs, nds))
    },
    [setNodes]
  )

  const onEdgesChange: OnEdgesChange = useCallback(
    (chs) => {
      setEdges((eds) => applyEdgeChanges(chs, eds))
    },
    [setEdges]
  )

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background variant="dots" />
        <Controls />
      </ReactFlow>
    </div>
  )
}
