import PropTypes from 'prop-types';
import './Greeting.css';

export default function Greeting({ name, age }) {
    return (
        <div className='greeting'>
            Olá, {name}! Você tem {age} anos.
        </div>
    );
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

