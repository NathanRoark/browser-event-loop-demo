import {Node, Position } from "reactflow"

export const initialNodes: Node[] = [
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
        job: "update the content rendered on the page",
      },
      position: { x: 0, y: -200 },
      sourcePosition: Position.Bottom,
    },
  ]