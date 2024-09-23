import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({ task }) {
    return (
        <div className="todo-item">
            {task}
        </div>
    );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
};

export default TodoItem;