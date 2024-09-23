import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([
        'Comprar leite',
        'Estudar React',
        'Fazer exercícios',
        'Ler um livro'
    ]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <div className="todo-list">
            <div className="add-task">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nova tarefa"
                />
                <button onClick={handleAddTask}>Adicionar</button>
            </div>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </div>
    );
}

export default TodoList;