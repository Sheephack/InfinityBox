import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'

function ItemDetail(props){
    return(
        <div style={{display: "flex", justifyContent:"center"}}>
            <Card bg='dark' border='warning' text='light' style={{width:'19rem', flex: "none"}} >
                <Card.Img variant="top" src={props.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Caja {props.rarity}</Card.Subtitle>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio: ${props.price}</ListGroupItem>
                    <ListGroupItem>Unidades en stock: {props.stock}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to={`/products`}>Volver a todos los productos</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail