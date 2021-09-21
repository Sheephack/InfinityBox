import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getData } from '../firebase'
import { useParams } from 'react-router'

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
                setTimeout(() => {setLoading(false)},1000)
            }else{
                const productsCollection = collection(getData(), 'productos')
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setProducts(productsList);
                setTimeout(() => {setLoading(false)},1000)
            }
        } catch (error){
            setLoading(false)
            console.log("error")
        }
    }
    fetchData()
    }, [categoryId])
    
    if(loading){
        return <div className="centerScreen"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    }
    return loading ? <h2>Cargando...</h2> : <ItemList products={products} />

}
export default ItemListContainer