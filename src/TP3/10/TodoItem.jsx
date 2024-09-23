import { useState } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({ task, onTaskDelete }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    const handleDelete = () => {
        onTaskDelete(task);
    };

    return (
        <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            {task}
            <div>
                <button onClick={handleComplete} disabled={isCompleted}>
                    Concluir
                </button>
                <button onClick={handleDelete}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    onTaskDelete: PropTypes.bool.isRequired
};

export default TodoItem;