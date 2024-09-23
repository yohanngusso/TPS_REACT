import { useState } from 'react';
import './main.css';

export default function App() {
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [precoTotal, setPrecoTotal] = useState(0);

    function calcularPrecoTotal(preco, quant) {
        return preco * quant;
    }

    function chamadaCalcular() {
        const precoNum = parseFloat(preco);
        const quantidadeNum = parseFloat(quantidade);

        if (isNaN(precoNum) || isNaN(quantidadeNum) || precoNum <= 0 || quantidadeNum <= 0) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const total = calcularPrecoTotal(precoNum, quantidadeNum);
        setPrecoTotal(total);
    }

    return (
        <div>
            <h1>Preço Total</h1>
            <div>
                <label>
                    Preço unitário:
                    <input
                        type="text"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Quantidade comprada:
                    <input
                        type="text"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={chamadaCalcular}>Calcular</button>
            <div>
                <h2>Preço Total: R$ {precoTotal.toFixed(2)}</h2>
            </div>
        </div>
    );
}