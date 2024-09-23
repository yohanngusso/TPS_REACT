import { useState } from 'react';
import './main.css';

function calcularTotalItens(itens) {
    return itens.reduce((total, item) => total + item.quantidade * item.precoUnitario, 0);
}

export default function App() {
    const [itens] = useState([
        { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
        { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
        { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 }
    ]);

    const total = calcularTotalItens(itens);

    return (
        <div className="app">
            <h1>Total do Carrinho de Compras</h1>
            <div className="itens-container">
                <h2>Itens no Carrinho:</h2>
                <ul>
                    {itens.map((item, index) => (
                        <li key={index}>
                            {item.nome} - Quantidade: {item.quantidade} - Preço Unitário: R$ {item.precoUnitario}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="total-container">
                <p>Valor Total: R$ {total}</p>
            </div>
        </div>
    );
}