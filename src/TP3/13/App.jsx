import Temperature from './Temperature';
import './App.css';

function App() {
    const currentTemperature = 30; // Exemplo de temperatura

    return (
        <div className="app">
            <Temperature temperature={currentTemperature} />
        </div>
    );
}

export default App;