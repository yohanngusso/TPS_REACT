import './CartaoPerfil.css';
import userImage from './img/user1.jpeg';

export default function CartaoPerfil() {
    return (
        <div className="cartao-perfil">
            <img src={userImage} alt="Perfil" className="imagem-perfil" />
            <h2>Yohann Gusso</h2>
            <p>Estudante de Engenharia de Software com 3 anos de experiência em assistência técnica, especializado em Manutenção em computadores, onde  desenvolvi habilidades de comunicação e organização.</p>
        </div>
    );
}