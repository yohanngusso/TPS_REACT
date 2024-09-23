import Card from './Card';
import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Cards</h1>
            <div className="card-container">
                <Card title="Card 1" text="Este é o texto do Card 1." />
                <Card title="Card 2" text="Este é o texto do Card 2." />
                <Card title="Card 3" text="Este é o texto do Card 3." />
                <Card title="Card 4" text="Este é o texto do Card 4." />
            </div>
        </div>
    );
}

export default App;