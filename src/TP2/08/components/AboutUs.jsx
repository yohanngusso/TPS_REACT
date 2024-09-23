import image1 from "../images/AboutUs/1.svg"
import image2 from "../images/AboutUs/2.svg"
import image3 from "../images/AboutUs/3.svg"
import './AboutUs.css';

export default function AboutUs() {
    return (
        <section id="about-us" className="about-us">
            <h2>Quem Somos</h2>
            <p>Informações sobre a história e a equipe da empresa.</p>
            <div className="about-us-images">
                <img src={image1} alt="Team Member 1" />
                <img src={image2} alt="Team Member 2" />
                <img src={image3} alt="Team Member 3" />
            </div>
        </section>
    );
}