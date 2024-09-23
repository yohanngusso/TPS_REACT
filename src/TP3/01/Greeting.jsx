import PropTypes from 'prop-types';

export default function Greeting({ name }) {
    return (
        <div className='greeting'>
            Olá, {name}!
        </div>
    );
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
};

