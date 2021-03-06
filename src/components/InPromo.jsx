import Carousel from 'react-bootstrap/Carousel'
import slide from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import PortraitItem from './PortraitItem'
import { getDocs, query, where, collection } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { getData } from '../firebase'

function InPromo(){
    const [promo, setPromo] = useState([])

    useEffect(() =>{
        async function fetchData(){
        try {
            const productsCollection = query(collection(getData(), 'productos'),where('onFrontPage', "==", true ))
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setPromo(productsList);
        } catch (error){
            console.log("error")
        }
        }
    fetchData()
    }, [])


    return(
        <>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide}
                alt="Madre alzando a su hijo"
                />
                <Carousel.Caption className="captionRight">
                    <h3 className="tittleLeft">Especial Día de la Madre</h3>
                    <p>Domingo 17 de Octubre 2021</p>
                    <PortraitItem {...promo[2]}></PortraitItem>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Plato de pastas y ensalada"
                />
                <Carousel.Caption className="captionLeft">
                <h3 className="tittleLeft">Gastronomia</h3>
                <p>Los mejores lugares para agasajar el estomago</p>
                <PortraitItem {...promo[1]}></PortraitItem>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Concierto al aire libre"
                />
                <Carousel.Caption className="captionRight">
                <h3 className="tittleLeft">Con amigos</h3>
                <p>Conciertos, salidas y más</p>
                <PortraitItem {...promo[0]}></PortraitItem>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )

}

export default InPromo