import { useState } from 'react';
import './main.css';

function filtrarAcimaPreco(produtos, precoMinimo) {
    return produtos.filter(produto => produto.preco > precoMinimo);
}

export default function App() {
    const [precoMinimo, setPrecoMinimo] = useState('');
    const [produtos] = useState([
        { nome: "Laptop", preco: 1000 },
        { nome: "Tablet", preco: 400 },
        { nome: "Smartphone", preco: 1500 }
    ]);

    const produtosFiltrados = filtrarAcimaPreco(produtos, parseFloat(precoMinimo) || 0);

    return (
        <div className="app">
            <h1>Filtrar Produtos por Preço</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={precoMinimo}
                    onChange={(e) => setPrecoMinimo(e.target.value)}
                    placeholder="Digite o preço mínimo"
                />
            </div>
            <div className="produtos-container">
                <h2>Produtos Filtrados:</h2>
                <ul>
                    {produtosFiltrados.map((produto, index) => (
                        <li key={index}>{produto.nome} - R$ {produto.preco}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}