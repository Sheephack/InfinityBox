import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { getData } from '../firebase'
import Spinner from 'react-bootstrap/Spinner'
import { FaRegSadTear } from 'react-icons/fa'

function ItemDetailContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();
    
    useEffect(() =>{
    async function fetchData (){
        try {
            setLoading(true);
            const docRef = doc(getData(), "productos", id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()){
                setProducts(docSnap.data())
            }else{
                setNotFound(true)
            }
        } catch (error){
            setLoading(false)
            setNotFound(true)
        } finally {
            setLoading(false)
        }
            
    }
    fetchData()
}, [id])
    if(loading){
        return <div className="spinnerLoader"><Spinner animation="border" variant="warning"/></div>
    }
    if(notFound){
        return (
        <div className="errorLoading">
            <h3>Algo esta mal o ¡Este item no se encuentra dentro de nuestras cajitas!</h3>
            <FaRegSadTear className="errorLoading-Icon" />
        </div>
    )}
    return (
        <ItemDetail {...products} />
    )

}

export default ItemDetailContainer