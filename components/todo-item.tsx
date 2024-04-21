"use client";
import { deleteTodo, updateTodo } from "@/app/todos/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Todo } from "@/types/custom";
import { Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function TodoItem({ todo }: { todo: Todo }) {
  return (
    <form>
      <TodoCard todo={todo} />
    </form>
  );
}

export function TodoCard({ todo }: { todo: Todo }) {
  const { pending } = useFormStatus();
  return (
    <Card className={cn("w-full", pending && "opacity-50")}>
      <CardContent className="flex items-start gap-3 p-3">
        <span className="size-10 flex items-center justify-center">
          <Checkbox
            disabled={pending}
            checked={Boolean(todo.is_complete)}
            onCheckedChange={async (val) => {
              if (val === "indeterminate") return;
              await updateTodo({ ...todo, is_complete: val });
            }}
          />
        </span>
        <p className={cn("flex-1 pt-2 min-w-0 break-words")}>{todo.task}</p>
        <Button
          disabled={pending}
          formAction={async (data) => {
            await deleteTodo(todo.id);
          }}
          variant="ghost"
          size="icon"
        >
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">Delete Todo</span>
        </Button>
      </CardContent>
    </Card>
  );
}
