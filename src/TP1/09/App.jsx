import { useState } from 'react';
import './main.css';

function agruparPorCategoria(produtos) {
    return produtos.reduce((acc, produto) => {
        const { categoria, nome } = produto;
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(nome);
        return acc;
    }, {});
}

export default function App() {
    const [produtos] = useState([
        { nome: "Laptop", categoria: "Eletrônicos" },
        { nome: "Camisa", categoria: "Roupas" },
        { nome: "Smartphone", categoria: "Eletrônicos" },
        { nome: "Calça", categoria: "Roupas" },
        { nome: "Fone de Ouvido", categoria: "Eletrônicos" }
    ]);

    const produtosAgrupados = agruparPorCategoria(produtos);

    return (
        <div className="app">
            <h1>Produtos Agrupados por Categoria</h1>
            <div className="categorias-container">
                {Object.keys(produtosAgrupados).map((categoria, index) => (
                    <div key={index} className="categoria">
                        <h2>{categoria}</h2>
                        <ul>
                            {produtosAgrupados[categoria].map((nome, idx) => (
                                <li key={idx}>{nome}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}