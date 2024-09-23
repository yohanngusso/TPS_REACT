import './main.css';

function filtrarDisponiveis(produtos) {
    return produtos.filter(produto => produto.disponivel);
}

export default function App() {
    const produtos = [
        { nome: "Laptop", disponivel: true },
        { nome: "Tablet", disponivel: false },
        { nome: "Smartphone", disponivel: true }
    ];

    const produtosDisponiveis = filtrarDisponiveis(produtos);

    return (
        <div className="app">
            <h1>Produtos</h1>
            <div className="produtos-container">
                <div className="produtos-box">
                    <h2>Todos os Produtos</h2>
                    <ul>
                        {produtos.map((produto, index) => (
                            <li key={index}>{produto.nome}</li>
                        ))}
                    </ul>
                </div>
                <div className="produtos-box">
                    <h2>Produtos Disponíveis</h2>
                    <ul>
                        {produtosDisponiveis.map((produto, index) => (
                            <li key={index}>{produto.nome}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}