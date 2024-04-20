import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

export function TodoItem({ todo }: { todo: string }) {
  return (
    <form>
      <TodoCard todo={todo} />
    </form>
  );
}

export function TodoCard({ todo }: { todo: string }) {
  return (
    <Card className={cn("w-full")}>
      <CardContent className="flex items-start gap-3 p-3">
        <span className="size-10 flex items-center justify-center">
          <Checkbox />
        </span>
        <p className={cn("flex-1 pt-2 min-w-0 break-words")}>{todo}</p>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">Delete Todo</span>
        </Button>
      </CardContent>
    </Card>
  );
}
