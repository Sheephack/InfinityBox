import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { getData } from '../firebase'
import Spinner from 'react-bootstrap/Spinner'

function ItemDetailContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
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
                console.log("no document")
            }
        } catch (error){
            setLoading(false)
            console.log(id)
            console.log("error")
        } finally {
            setLoading(false)
        }
            
    }
    fetchData()
}, [id])
    if(loading){
        return <div className="spinnerLoader"><Spinner animation="border" variant="warning"/></div>
    }

    return (
        <ItemDetail {...products} />
    )

}

export default ItemDetailContainer