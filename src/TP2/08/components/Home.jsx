import './Home.css';
import home_image from "../images/Home/home.svg"

export default function Home() {
    return (
        <section id="home" className="home">
            <div className="home-image">
                <img src={home_image} alt="Home" />
            </div>
            <div className="home-text">
                <h1>Bem-vindo à Nossa Empresa</h1>
                <p>Nossa missão é fornecer os melhores produtos e serviços.</p>
            </div>
        </section>
    );
}