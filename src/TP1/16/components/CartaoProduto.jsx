import './CartaoProduto.css';

import PropTypes from 'prop-types';
export default function CartaoProduto({ produto }) {

    return (
        <div className="cartao-produto">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p className="preco">{produto.preco}</p>
        </div>
    );
}

CartaoProduto.propTypes = {
    produto: PropTypes.object.isRequired
};