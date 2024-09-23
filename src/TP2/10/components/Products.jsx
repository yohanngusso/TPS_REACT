import image1 from "../images/Products/1.svg";
import image2 from "../images/Products/2.svg";
import image3 from "../images/Products/3.svg";
import image4 from "../images/Products/4.svg";
import image5 from "../images/Products/5.svg";
import image6 from "../images/Products/6.svg";
import './Products.css';

export default function Products() {
    return (
        <>
            <div className="products-title">
                <h2>Produtos</h2>
            </div>
            <section id="products" className="products">
                <div className="products-grid">
                    <img src={image1} alt="Product 1" />
                    <img src={image2} alt="Product 2" />
                    <img src={image3} alt="Product 3" />
                    <img src={image4} alt="Product 4" />
                    <img src={image5} alt="Product 5" />
                    <img src={image6} alt="Product 6" />
                </div>
            </section>
        </>
    );
}