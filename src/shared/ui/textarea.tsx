import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full px-4 py-3 border-2 border-gray-200 disabled:opacity-50 rounded-xl focus:border-purple-600 focus:outline-none transition-colors text-lg resize-none",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
