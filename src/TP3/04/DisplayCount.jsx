import './DisplayCount.css';
import PropTypes from 'prop-types';

function DisplayCount({ count }) {
    return (
        <div className="display-count">
            Contador: {count}
        </div>
    );
}

DisplayCount.propTypes = {
    count: PropTypes.number.isRequired,
};

export default DisplayCount;