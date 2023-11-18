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
  BackgroundVariant,
  NodeTypes,
  EdgeTypes,
} from "reactflow"

import "reactflow/dist/style.css"

export function Flow({
  nodes: initNodes,
  edges: initEdges,
  nodeTypes: nodeTypes,
  edgeTypes: edgeTypes,
}: {
  nodes: Node[]
  edges: Edge[]
  nodeTypes?: NodeTypes
  edgeTypes?: EdgeTypes
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
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-3.7em)]">
      <ReactFlow
        zoomOnDoubleClick={false}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
