import { Link } from 'react-scroll';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about-us" smooth={true} duration={1000}>Quem Somos</Link></li>
                    <li><Link to="products" smooth={true} duration={1500}>Produtos</Link></li>
                    <li><Link to="contact" smooth={true} duration={1500}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}