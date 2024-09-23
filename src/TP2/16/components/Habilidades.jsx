import img_react from "../images/habilidades/react.svg"
import img_angular from "../images/habilidades/angular.svg"
import img_html from "../images/habilidades/html.svg"
import img_css from "../images/habilidades/css.svg"
import img_js from "../images/habilidades/js.svg"
import img_python from "../images/habilidades/python.svg"
import img_java from "../images/habilidades/java.svg"
import img_mongodb from "../images/habilidades/mongo-db.svg"
import './Habilidades.css';

export default function Habilidades() {
    return (
        <section id="habilidades" className="habilidades">
            <h2>Habilidades</h2>
            <div className="habilidades-grid">
                <img src={img_react} alt="Skill 1" />
                <img src={img_angular} alt="Skill 2" />
                <img src={img_html} alt="Skill 3" />
                <img src={img_css} alt="Skill 4" />
                <img src={img_js} alt="Skill 5" />
                <img src={img_python} alt="Skill 6" />
                <img src={img_java} alt="Skill 7" />
                <img src={img_mongodb} alt="Skill 8" />
            </div>
        </section>
    );
}