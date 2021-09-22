import { FiBox, FiCreditCard } from 'react-icons/fi'
import { ImInfinite } from 'react-icons/im'
import { RiArrowRightLine } from 'react-icons/ri'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { RiArrowLeftDownLine, RiArrowRightDownLine } from 'react-icons/ri'
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from "react-router-hash-link"

function About(){
    return(
        <div className="about__container">
            <h2>¿Como funcionamos?</h2>
            <p>Es tan facil como seguir estos pasos:</p>
            <div className="about__container__body">
                <div className="about__container__body__item">
                    <div className="about__container__body__item__card">
                        <FiBox className="about__container__body__item__icon" />
                        <h3>Elegi tus cajitas de nuestro catalogo</h3>
                    </div>
                    <p>Nuestro catalogo se renueva constantemente, siempre con opciones diferentes mes a mes.</p>
                </div>
                <RiArrowRightLine className="about__container__body__item__icon--middle" />
                <div className="about__container__body__item">
                    <div className="about__container__body__item__card">
                        <FiCreditCard className="about__container__body__item__icon" />
                        <h3>Compralas online</h3>
                    </div>
                    <p>Podes comprarlas aca mismo desde nuestro sitio a medida que se incorporen nuevas cajitas</p>
                </div>
                <RiArrowRightLine className="about__container__body__item__icon--middle" />
                <div className="about__container__body__item">
                    <div className="about__container__body__item__card">
                        <ImInfinite className="about__container__body__item__icon" />
                        <h3>¡Usa tu token de caja infinita!</h3>
                    </div>
                    <p>Todas nuestras cajas tienen la chance de tener una siguiente caja dentro, ¡Eso las hace infinitas!</p>
                </div>
            </div>
            <div className="about__container__footer">
                <RiArrowRightDownLine className="about__container__body__item__icon"/>
                <div className="about__container__footer__item">
                    <div className="about__container__footer__item__card">
                        <GiPerspectiveDiceSixFacesRandom className="about__container__body__item__icon"/>
                    </div>
                    <h3>Rareza = Calidad</h3>
                    <p>Cuanto mas rara sea la caja, mas probabilidas de tener un Token de Caja Infinita.</p>
                </div>
                <RiArrowLeftDownLine className="about__container__body__item__icon"/>
            </div>
            <Button as={Link} to="/products" variant="warning" id="categorySpawn">¡Explora todas nuestras cajitas!</Button>
        </div>
    );
}

export default About