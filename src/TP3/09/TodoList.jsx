import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks, newTask, setNewTask, handleAddTask }) {
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

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    newTask: PropTypes.string.isRequired,
    setNewTask: PropTypes.func.isRequired,
    handleAddTask: PropTypes.func.isRequired,
};

export default TodoList;