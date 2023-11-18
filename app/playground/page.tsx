"use client"

import { NodeTypes, ReactFlowProvider } from "reactflow"

import { Flow } from "@/components/flows/initial-flow"

import { initialEdges } from "@/lib/initial-edges"
import { initialNodes } from "@/lib/initial-nodes"

import { EventLoopCustomNode } from "@/components/nodes/event-loop-node"
import { JSEventNode } from "@/components/nodes/js-event-node"
import { RenderEventNode } from "@/components/nodes/render-event-node"
import { RenderNode } from "@/components/nodes/render-node"
import { RenderSubnode } from "@/components/nodes/render-subnode"
import { QueueNode } from "@/components/nodes/queue-node"
import { StackNode } from "@/components/nodes/stack-node"

const nodeTypes: NodeTypes = {
  event_loop_node: EventLoopCustomNode,
  queue_node: QueueNode,
  stack_node: StackNode,
  js_event_node: JSEventNode,
  render_event_node: RenderEventNode,
  render_node: RenderNode,
  render_subnode: RenderSubnode,
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} />
    </ReactFlowProvider>
  )
}
