import img1 from "../images/contatos/github.svg";
import img2 from "../images/contatos/linkedin.svg";
import './Contato.css';

export default function Contato() {
    return (
        <section id="contato" className="contato">
            <h2>Contato</h2>
            <div className="contato-grid">
                <a href="https://github.com/yohanngusso/" target="_blank" rel="Github do yohann">
                    <img src={img1} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/yohanngusso/" target="_blank" rel="linkedin do yohann">
                    <img src={img2} alt="LinkedIn" />
                </a>
            </div>
        </section>
    );
}