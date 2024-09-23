import './Product.css';
import PropTypes from 'prop-types';

function Product({ name, price, description }) {
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>Preço: R${price}</p>
            <p>{description ? description : "Descrição não disponível"}</p>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string
};

export default Product;