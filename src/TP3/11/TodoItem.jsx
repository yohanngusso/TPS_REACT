import { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ task, onTaskDelete, onTaskUpdate }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    const handleDelete = () => {
        onTaskDelete(task);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onTaskUpdate(task, editedTask);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                />
            ) : (
                <span>{task}</span>
            )}
            <div>
                {isEditing ? (
                    <button onClick={handleSave}>Salvar</button>
                ) : (
                    <button onClick={handleEdit}>Editar</button>
                )}
                <button onClick={handleComplete} disabled={isCompleted}>
                    Concluir
                </button>
                <button onClick={handleDelete}>Excluir</button>
            </div>
        </div>
    );
}
TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
