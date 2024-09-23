import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const tasks = [
        'Comprar leite',
        'Estudar React',
        'Fazer exercícios',
        'Ler um livro'
    ];

    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </div>
    );
}

export default TodoList;