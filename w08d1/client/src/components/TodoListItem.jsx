import './TodoListItem.scss';

const TodoListItem = (props) => {
  // console.log('props', props);
  return (
    <div className="todo-list-item">
      <h2>Task: {props.todo.task} ({props.todo.id})</h2>
      <h3>Completed: {props.todo.completed === true ? '✅' : '🟩'}</h3>
    </div>
  );
};

export default TodoListItem;
