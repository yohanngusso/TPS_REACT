import { useState } from 'react';
import './main.css';

function calcularMediaAvaliacoes(avaliacoes) {
    const avaliacoesValidas = avaliacoes.filter(avaliacao => !isNaN(avaliacao) && avaliacao !== '');
    if (avaliacoesValidas.length === 0) return 0; // Evita divisão por zero
    const soma = avaliacoesValidas.reduce((acc, avaliacao) => acc + parseFloat(avaliacao), 0);
    return soma / avaliacoesValidas.length;
}

export default function App() {
    const [avaliacoes, setAvaliacoes] = useState(['']);

    const handleAvaliacaoChange = (index, value) => {
        const novasAvaliacoes = [...avaliacoes];
        novasAvaliacoes[index] = value;
        setAvaliacoes(novasAvaliacoes);
    };

    const adicionarLinha = () => {
        setAvaliacoes([...avaliacoes, '']);
    };

    const removerLinha = (index) => {
        const novasAvaliacoes = avaliacoes.filter((_, i) => i !== index);
        setAvaliacoes(novasAvaliacoes);
    };

    const media = calcularMediaAvaliacoes(avaliacoes);

    return (
        <div className="app">
            <h1>Média de Avaliações</h1>
            <div className="input-container">
                {avaliacoes.map((avaliacao, index) => (
                    <div key={index} className="input-row">
                        <input
                            type="number"
                            value={avaliacao}
                            onChange={(e) => handleAvaliacaoChange(index, e.target.value)}
                            placeholder="Digite uma avaliação"
                        />
                        <button onClick={() => removerLinha(index)}>Remover</button>
                    </div>
                ))}
                <button onClick={adicionarLinha}>Adicionar Avaliação</button>
            </div>
            <div className="media-container">
                <h2>Média: {media.toFixed(2)}</h2>
            </div>
        </div>
    );
}