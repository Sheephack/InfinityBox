import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../img/iboxlogo.png'
import { useState } from 'react';
import { getData } from '../firebase'

import Swal from 'sweetalert2'
import { collection, addDoc, Timestamp } from "firebase/firestore";


function Footer() {

    const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
    })

    const [contact, setContact] = useState([])

    const handleInputChange = e => {
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        const handleBuy = async() =>{
            await addDoc(collection(getData(), "contacts"), {
                mail: contact,
                date: Timestamp.fromDate(new Date())
            })
            Toast.fire({
                icon: 'success',
                title: 'Felicidades!',
                text: `Tu correo ha sido guardado. Te notificaremos cuando existan nuevas cajitas!`,
            })
          }
          handleBuy()
          e.target.reset();
        }
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
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Contactanos:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="input" onChange={handleInputChange} name="mail" id="contactLink"/>
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