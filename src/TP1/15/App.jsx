import Cabecalho from './components/Cabecalho';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos';
import './main.css';

export default function App() {
    return (
        <div className="app">
            <Cabecalho />
            <Projetos />
            <Contatos />
        </div>
    );
}