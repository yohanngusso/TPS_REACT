import { useState } from 'react';
import './main.css';

function encontrarProdutoPorNome(produtos, nome) {
    return produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
}

export default function App() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [produtos] = useState([
        { nome: "Laptop", preco: 1000 },
        { nome: "Tablet", preco: 400 },
        { nome: "Smartphone", preco: 1500 }
    ]);

    const produtoEncontrado = encontrarProdutoPorNome(produtos, nomeProduto);

    return (
        <div className="app">
            <h1>Buscar Produto por Nome</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={nomeProduto}
                    onChange={(e) => setNomeProduto(e.target.value)}
                    placeholder="Digite o nome do produto"
                />
            </div>
            <div className="produto-encontrado-container">
                <h2>Produto Encontrado:</h2>
                {produtoEncontrado ? (
                    <p>{produtoEncontrado.nome} - R$ {produtoEncontrado.preco}</p>
                ) : (
                    <p>Nenhum produto encontrado</p>
                )}
            </div>
        </div>
    );
}