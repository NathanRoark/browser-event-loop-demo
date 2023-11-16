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
import { EventLoopCustomNode } from "@/components/nodes/event-loop-node"
import { JSEventNode } from "@/components/nodes/js-event-node"
import { RenderEventNode } from "@/components/nodes/render-event-node"
import { RenderNode } from "@/components/nodes/render-node"
import { JSEdge } from "@/components/edges/js-edge"
import { RenderSubnode } from "@/components/nodes/render-subnode"

const customNodeTypes: NodeTypes = {
  event_loop_node: EventLoopCustomNode,
  js_event_node: JSEventNode,
  render_event_node: RenderEventNode,
  render_node: RenderNode,
  render_subnode: RenderSubnode,
}

const customEdgeTypes: EdgeTypes = {
  js_edge: JSEdge,
}

export function Flow({
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
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-3.7em)]">
      <ReactFlow
        zoomOnDoubleClick={false}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={customNodeTypes}
        edgeTypes={customEdgeTypes}
        proOptions={{ hideAttribution: true }}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
