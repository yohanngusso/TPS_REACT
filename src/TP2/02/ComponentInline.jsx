import tp2Image1 from '../../assets/images/tp2_2/1.jpg'
import tp2Image2 from '../../assets/images/tp2_2/2.jpg'
import tp2Image3 from '../../assets/images/tp2_2/3.jpg'
import tp2Image4 from '../../assets/images/tp2_2/4.jpg'
import './main.css'

export default function ComponentInline(){
    return (
        <div className='container'>
            <div className='images-row'>
                <img src={tp2Image1} alt="Product 1" className="image" />
                <img src={tp2Image2} alt="Product 2" className="image" />
                <img src={tp2Image3} alt="Product 3" className="image" />
            </div>
            <div className="description-container">
                <p className="description">
                <h1>Coca-Cola</h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing lore
                </p>
                <img src={tp2Image4} alt="Product 4" className="image" />
            </div>
        </div>
    );

}