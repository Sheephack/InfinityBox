import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Item(props){
    return(
        <>
            <Card bg='dark' border='warning' text='light' className="itemFromList" >
                <Card.Img className="itemFromList__img" variant="top" src={props.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Caja {props.rarity}</Card.Subtitle>
                </Card.Body>
                <div className="itemFromList__listGroup">
                    <Card.Text>Precio: ${props.price}</Card.Text>
                </div>
                <Card.Body>
                    <Button as={Link} to={`/item/${props.id}`} variant="outline-warning">Mostrar detalles</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item