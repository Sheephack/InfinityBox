import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Item(props){
    return(
        <>
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
                    <Card.Link href="#">Mostrar detalles</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item