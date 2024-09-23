import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <div className="card-container">
                <Card title="Card 1" text="This is the first card." />
                <Card title="Card 2" text="This is the second card." />
            </div>
            <Footer />
        </div>
    );
}