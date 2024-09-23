import PropTypes from 'prop-types';
import './styles.css'

const Card = ({ title, text }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Card;