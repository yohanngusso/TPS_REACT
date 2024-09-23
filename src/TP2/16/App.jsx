import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Certificacoes from './components/Certificacoes'
import Contato from './components/Contato';
import './styles.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <SobreMim />
            <Habilidades />
            <Projetos />
            <Certificacoes />
            <Contato />
        </div>
    );
}