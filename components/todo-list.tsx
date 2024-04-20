import { TodoItem } from "./todo-item";
import { TodoForm } from "./todo-form";

export function TodoList({ todos }: { todos: Array<string> }) {
  return (
    <>
      <TodoForm />
      <div className="w-full flex flex-col gap-4">
        {todos?.map((todo) => {
          return <TodoItem todo={todo} key={todo} />;
        })}
      </div>
    </>
  );
}
