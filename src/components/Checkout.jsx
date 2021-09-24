import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { getData } from '../firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useCart } from "../context/cartContext";
import Swal from 'sweetalert2'
import '../scss/override.scss'


export default function Checkout({...props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const itemsInCart = useCart();

    const [data, setData] = useState({
      name: '',
      mail: '',
      mailConf: '',
      tel: 0
    });

    const handleInputChange = e => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
    };
    function handleSubmit(e) {
      e.preventDefault();
      if (data.mail === data.mailConf) {
        const subPrice = []
        let totalPrice
        for (const prices of itemsInCart){
          const finalPrice = prices.price * prices.quantity
          subPrice.push(finalPrice)
          totalPrice = subPrice.reduce((a, b) => a + b)
        }
        const handleBuy = async() =>{
        const db = getData();
        const docRef = await addDoc(collection(db, "ordenes"), {
          buyer: data,
          items: itemsInCart,
          date: Timestamp.fromDate(new Date()),
          total: totalPrice
        })
        Swal.fire({
          icon: 'success',
          title: 'Felicidades!',
          text: `Tu orden de compra es la número ${docRef.id}`,
        })
        }
        handleBuy()
        e.target.reset();
      } else {
        setData({
          name: '',
          mail: '',
          mailConf: '',
          tel: 0
        });
        Swal.fire({
          icon: 'error',
          title: '¡Ojo!',
          text: `Tus e-mails no coinciden, por favor verificar.`,
        })
        e.target.reset();
      }
    }
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Finalizar compra e ir a Checkout
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Checkout</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                        Para completar la compra, te pediremos un par de datos previos!
                </Form.Label>
                <hr />
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre y Apellido"
                            onChange={handleInputChange}
                            name="name"
                            />
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Floating>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Floating className="mb-3">
                        <Form.Control required type="email" placeholder="Enter email" onChange={handleInputChange} name="mail" />
                        <Form.Label>Dirección de Email</Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formReEnterEmail">
                    <Form.Floating className="mb-3">
                        <Form.Control required type="email" placeholder="Enter email" onChange={handleInputChange} name="mailConf"/>
                        <Form.Text className="text-muted">
                        No compartiremos tu Email con nadie, solo es para verificar tu compra.
                        </Form.Text>
                        <Form.Label>Reingrese Email</Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Floating className="mb-3">
                        <Form.Control required type="tel" placeholder="Telefono" onChange={handleInputChange} name="tel" />
                        <Form.Label>Telefono</Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Button variant="success" type="submit" >
                    ¡Finalizar Compra!
                </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }