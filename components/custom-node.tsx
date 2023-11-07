import { RocketIcon } from "@radix-ui/react-icons"
import { Handle, Position } from "reactflow"

export function CustomNode(data: { label: string; job: string }) {
  return (
    <div className="rounded-md border-2 px-4 py-2 shadow-md">
      <div className="flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full ">
          <RocketIcon />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">Node</div>
          <div className="text-gray-500">Task</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  )
}
