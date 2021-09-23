import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { HashLink as Link } from "react-router-hash-link"
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'


export default function PortraitItem(props) {

    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        async function LoadingState(){
            try {
                setLoading(true);
            } catch (error){
                setLoading(false)
                console.log("error")
            }finally{
                setTimeout(() => {setLoading(false)},1000)
            }
        }
    LoadingState()
    }, [])
    if (loading){
        return(
            <Card className="portraitCard" bg="dark">
                <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Spinner animation="border" variant="warning" />
                </Card.Body>
            </Card>
        )
    }

    return(
        <Card className="portraitCard" bg="dark">
            <Card.Img variant="top" src={props.pictureUrl} className="portraitCard__img" />
            <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Caja {props.rarity}</Card.Subtitle>
            </Card.Body>
                <Button variant="outline-warning" className="portraitCard__btn" as={Link} to={`/item/${props.id}#categorySpawn`}>Ver más</Button>
        </Card>

    )
}















