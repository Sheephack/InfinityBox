import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getData } from '../firebase'
import { useParams } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams()
    useEffect(() =>{

        async function fetchData(){
        try {
            setLoading(true);
            if(categoryId !== undefined){
                const productsCollection = query(collection(getData(), 'productos'),where('category', "==", categoryId))
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setProducts(productsList);
                setLoading(false)
            }else{
                const productsCollection = collection(getData(), 'productos')
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setProducts(productsList);
                setLoading(false)
            }
        } catch (error){
            setLoading(false)
            console.log("error")
        }
    }
    fetchData()
    }, [categoryId])
    
    if(loading){
        return <div className="spinnerLoader"><Spinner animation="border" variant="warning" /></div>
    }
    return <ItemList products={products} />

}
export default ItemListContainer