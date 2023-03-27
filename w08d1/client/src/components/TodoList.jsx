import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  // console.log(props);
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />
  });

  return (
    <div>
      <h2>TodoList component</h2>
      { mappedTodos }
    </div>
  );
};

export default TodoList;
