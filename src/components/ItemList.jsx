import Item from './Item'


function ItemList({ products }){
   return(
       <div className="itemList">
           {products.map((item) => (
               <Item {...item} key={item.id}/>
           ))}
       </div>
   )
}

export default ItemList