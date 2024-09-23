import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">Quem Somos</a></li>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}