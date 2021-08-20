import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsJson } from './productsJson'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    useEffect(() =>{
        new Promise((resolve, reject) =>{
            setLoading(true)
            setTimeout(() => resolve(productsJson.filter((item) => item.id === id)), 3000);
        }).then((data) => setProducts(data[0]))
        .finally(() =>{
            setLoading(false)})
    }, [])
    if(loading){
        return <div className="centerScreen"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    }

    return (
        <ItemDetail {...products} />
    )

}

export default ItemDetailContainer