import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
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
        <div className="app">
            <TodoList
                tasks={tasks}
                newTask={newTask}
                setNewTask={setNewTask}
                handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default App;