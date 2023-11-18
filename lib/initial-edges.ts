import { Edge } from "reactflow"

export const initialEdges: Edge[] = [
  {
    id: "e1-0",
    source: "1",
    target: "0",
    targetHandle: "left-top-target",
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
    sourceHandle: "bottom-source",
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
    id: "e0-8",
    source: "0",
    target: "8",
    targetHandle: "left-bottom-target",
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: "#fcd34d",
    },
  },
]
