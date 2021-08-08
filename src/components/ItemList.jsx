import { useEffect, useState } from "react"
import Item from './Item'
import beerLogo from '../img/box-beer.png'
import candyLogo from '../img/box-candy.png'
import misteryLogo from '../img/box-mistery.png'

function ItemList(){
    const [products, setProducts] = useState([])
    useEffect(() =>{
        new Promise((resolve, reject) =>{
            const data = [
                {
                    id: 1,
                    title: 'Caja Misteriosa',
                    description: 'Una caja que puede tener los contenidos de cualquier tipo de caja',
                    stock: 4,
                    pictureUrl: misteryLogo,
                    price: 1500,
                    rarity: 'Legendaria'
                },
                {
                    id: 2,
                    title: 'Caja de comida dulce',
                    description: 'La caja ideal para la gente golosa. Muchas golosinas de diferentes tipos.',
                    stock: 15,
                    pictureUrl: candyLogo,
                    price: 200,
                    rarity: 'Común'
                },
                {
                    id: 3,
                    title: 'Caja de cervezas artesanales',
                    description: 'Esta caja no es para gente que no puede frenar. Una serie de diferentes tipos de cervezas se encuentran aqui dentro',
                    stock: 4,
                    pictureUrl: beerLogo,
                    price: 400,
                    rarity: 'Rara'
                }
            ]
            setTimeout(() => resolve(data), 3000)
        }).then((dataResolve) => {
            setProducts(dataResolve)
        })
        .catch((error) => {
            console.log('err', error)
        })
    }, [])
    return (
        
        <div className="groupOfCards" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {products.map((productList) => <Item {...productList}/>)}
        </div>
    )
}

export default ItemList