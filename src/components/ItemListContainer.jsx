import ItemCount from './ItemCount'

function ItemListContainer(props){
    return(
        <div>
            <div className="saludo">¡Hola {props.name}!, gracias por corregir el desafio!</div>
            <div className="saludo"><ItemCount stock={7} initial={1}/></div>
        </div>
    )
}
export default ItemListContainer