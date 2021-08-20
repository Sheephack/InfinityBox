import { useEffect, useState } from 'react'
import { productsJson } from './productsJson'
import ItemList from './ItemList'

function ItemListContainer(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() =>{
        new Promise((resolve, reject) =>{
            setLoading(true)
            setTimeout(() => resolve(productsJson), 3000);
        }).then((data) => setProducts(data))
        .finally(() =>{
            setLoading(false)
        })
        
    }, [])
    
    if(loading){
        return <div className="centerScreen"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    }
    return loading ? <h2>Cargando...</h2> : <ItemList products={products} />

}
export default ItemListContainer