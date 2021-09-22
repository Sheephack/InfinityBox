import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../img/iboxlogo.png'

function Footer() {
    return(
        <footer>
            <div className="info">
                <div className="info__logo">
                    <img src={logo} alt="Logo de Infinity-Box" className="info__logo__img"/>
                    <div className="info__logo__text">
                        <h3 className="info__logo__text__title">Infinity Box</h3>
                        <p>Generamos anticipación, festejos y sorpresas.</p>
                    </div>
                </div>
            </div>
            <div className="subscribe">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contactanos:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="input"/>
                        <Form.Text className="text-muted">
                            Te enviaremos notificaciones cuando existan nuevas cajitas.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Subscribite
                    </Button>
                </Form>
            </div>
            <div className="copyright">
                <small>2021 &copy; - Matias Palladino</small>
            </div>
        </footer>
    )
}

export default Footer