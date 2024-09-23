import StatusBadge from './StatusBadge';
import './App.css';

function App() {
    return (
        <div className="app">
            <StatusBadge status="ativo" />
            <StatusBadge status="inativo" />
            <StatusBadge status="pendente" />
            <StatusBadge status="desconhecido" />
        </div>
    );
}

export default App;