import img1 from "../images/header/img1.jpg"
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                    <h1>Yohann Gusso</h1>
                    <h2>Software Engineer</h2>
                </div>
                <div className="header-image">
                    <img src={img1} alt="Yohann Gusso" />
                </div>
            </div>
        </header>
    );
}