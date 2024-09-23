import { useState } from 'react';
import './main.css';

function verificarEstoque(produtos) {
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
}

export default function App() {
    const [produtos] = useState([
        { nome: "Laptop", quantidadeEmEstoque: 5 },
        { nome: "Tablet", quantidadeEmEstoque: 0 },
        { nome: "Smartphone", quantidadeEmEstoque: 3 }
    ]);

    const produtosEmEstoque = verificarEstoque(produtos);

    return (
        <div className="app">
            <h1>Produtos em Estoque</h1>
            <div className="produtos-estoque-container">
                <ul>
                    {produtosEmEstoque.map((produto, index) => (
                        <li key={index}>{produto.nome} - Quantidade em Estoque: {produto.quantidadeEmEstoque}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}