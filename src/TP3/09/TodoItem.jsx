import { useState } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({ task }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    return (
        <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            {task}
            <button onClick={handleComplete} disabled={isCompleted}>
                Concluir
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
};

export default TodoItem;