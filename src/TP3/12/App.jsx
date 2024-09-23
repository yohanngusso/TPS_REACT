import List from './List';
import './App.css';

function App() {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div className="app">
            <List numbers={numbers} />
        </div>
    );
}

export default App;