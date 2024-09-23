import { useState } from 'react';
import './main.css';

function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
}

export default function App() {
    const [categoria, setCategoria] = useState('');
    const [produtos] = useState([
        { nome: "Laptop", categoria: "Eletrônicos" },
        { nome: "Camisa", categoria: "Roupas" },
        { nome: "Smartphone", categoria: "Eletrônicos" }
    ]);

    const produtosFiltrados = filtrarPorCategoria(produtos, categoria);

    return (
        <div className="app">
            <h1>Filtrar Produtos por Categoria</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Digite a categoria"
                />
            </div>
            <div className="produtos-filtrados-container">
                <h2>Produtos Filtrados:</h2>
                <ul>
                    {produtosFiltrados.map((produto, index) => (
                        <li key={index}>{produto.nome} - {produto.categoria}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}