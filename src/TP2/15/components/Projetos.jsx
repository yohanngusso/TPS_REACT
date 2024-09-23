import img1 from "../images/projetos/jogo_velha.jpg"
import img2 from "../images/projetos/basquete.jpg"
import img3 from "../images/projetos/dados.png"
import img4 from "../images/projetos/metodos_numericos.png"
import img5 from "../images/projetos/sistema_gerenciamento.png"
import img6 from "../images/projetos/automacao.jpg"
import './Projetos.css';

export default function Projetos() {
    return (
        <section id="projetos" className="projetos">
            <h2>Projetos</h2>
            <div className="projetos-grid">
                <figure>
                    <img src={img1} alt="Project 1" />
                    <figcaption>Jogo da Velha</figcaption>
                </figure>
                <figure>
                    <img src={img2} alt="Project 2" />
                    <figcaption>App - Lançador Bola de Basquete</figcaption>
                </figure>
                <figure>
                    <img src={img3} alt="Project 3" />
                    <figcaption>Comunicação de Dados</figcaption>
                </figure>
                <figure>
                    <img src={img4} alt="Project 4" />
                    <figcaption>App - Métodos Numéricos</figcaption>
                </figure>
                <figure>
                    <img src={img5} alt="Project 5" />
                    <figcaption>Sistema de Gerenciamento</figcaption>
                </figure>
                <figure>
                    <img src={img6} alt="Project 6" />
                    <figcaption>Automação com Python</figcaption>
                </figure>
            </div>
        </section>
    );
}