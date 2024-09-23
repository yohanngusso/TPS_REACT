import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';
import './styles.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <AboutUs />
            <Products />
            <Contact />
        </div>
    );
}