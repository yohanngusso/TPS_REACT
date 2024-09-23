import './Temperature.css';
import PropTypes from 'prop-types';

function Temperature({ temperature }) {
    return (
        <div className="temperature">
            {temperature > 25 ? "Está quente!" : "Está frio!"}
        </div>
    );
}

Temperature.propTypes = {
    temperature: PropTypes.number.isRequired,
};

export default Temperature;