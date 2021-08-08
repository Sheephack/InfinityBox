import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props){
    return(
        <div>
            <div className="saludo">¡Hola {props.name}!, gracias por corregir el desafio!</div>
            <div className="saludo"><ItemCount stock={7} initial={1}/></div>
            <ItemList />
        </div>
    )
}
export default ItemListContainer