import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos, onDeleteTodo, onToogleTodo }) => {



    return (
        <ul className='list-group'>
        {
            todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToogleTodo } />
            ))
        }
    </ul>
    )
}
