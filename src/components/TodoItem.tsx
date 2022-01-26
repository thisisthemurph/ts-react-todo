import { Todo } from "../actions";
import { Chip } from "./Chip";
import "./TodoItem.scss";

interface TodoProps {
  todo: Todo;
  onTodoClick(id: number): void;
}

export const TodoItem = ({ todo, onTodoClick }: TodoProps) => {
  return (
    <div className="todo" key={todo.id} onClick={() => onTodoClick(todo.id)}>
      <div className="todo__title">{todo.title}</div>
      <Chip completed={todo.completed} />
    </div>
  );
};
