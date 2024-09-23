import Product from './Product';
import './App.css';

function App() {
    return (
        <div className="app">
            <Product name="Notebook" price={2500} description="Notebook com 16GB de RAM e 512GB SSD" />
            <Product name="Mouse" price={150} />
        </div>
    );
}

export default App;