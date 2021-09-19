# Infinity-Box
Proyecto de E-Commerce usando React-app para Coderhouse, su finalidad es la de poder ser un sitio de venta de Lootboxes, de diferentes categorias y tematicas.

Actualmente se encuentran instaladas las siguientes dependencias por fuera de las recomendadas:
- React-Bootstrap
- Bootstrap
- Bootstrap-icons
- React-icons
- Node-sass
- Nodemon
- Firebase
- SweetAlerts2

![alt text](https://media.giphy.com/media/HtXAfIeJBFSiZ5zXOZ/giphy.gif?cid=790b761100663205c06b2fdd17e21e63c4c2682ed7fae873&rid=giphy.gif&ct=g)

# Versión 1.2
- Se solucionan multiples advertencias de compilación de React.
    - Se solucionan problemas en algunas funciones async.
- Se añade uso de key en mapeo de items.
- Se añaden `16` productos a Firestore de diferentes rarezas para poder generar categorias mas populosas.
- Se modifica el comportamiento del `ItemListContainer` para poder albergar los nuevos productos.
- Se modifica la estetica general de todos los productos para alinearlos con los nuevos.
- Se soluciona problema de interacción con `Checkout`. (No se podia interactuar con el componente)
- Se elimina `iboxlogo.png` de la carpeta public y se ubica en un correcto lugar.

## Versión 1.1
- Se hacen mejoras generales y reformas esteticas del `index.html`
- Se comienza un cambio estetico del sitio y adaptabilidad para entrega final.
- Se crean nuevos (3) productos en Firestore:
    - Estos productos tienen como función principal ser los CTA del index.
    - Se incorpora llamada asincronica a solo estos 3 elementos en el index.
    - Se incorporan los CTA al carrusel del index.
- Se implementa Spinner de React-Bootstrap para secciones de Loading en Cards de index.
- Se deja como placeholder un Accordion de React-Bootstrap. (Sin modificar)
- Se eliminan del repositorio archivos que no tienen relevancia con el proyecto, a saber:
    - `App.css`
    - `logo.svg`
    - Directorio `img` dentro de public y todas sus imágenes (estan alojadas en Firestore)
- Se comienza a implementar estilos via SASS 

## Versión 1.0 (Primera versión completamente funcional)
- Se integra el uso de Firebase con recepción de ordenes de compra y devolución de numero de orden
- El proceso de selección de productos, creación de carrito y finalización de compra esta completo.
    - A partir de este commit, los cambios realizados en el proyecto a nivel funcional, solo seran en pos de incrementar la optimización, la estetica y la experiencia del usuario.
    - Se programa incrementar la cantidad de productos y la categorización de los mismos.

## Versión 0.9
- Se elimina el uso de async mocks. Se elimina el archivo productsJson.js
- Se implementa uso de Firebase, con reemplazo de los items del mock. Todas las llamadas son remotas.
- Se hace uso de llamada simple en ItemDetailContainer.

## Versión 0.8.2
- Se finaliza el uso de Context para la correcta manipulacion del cart.
- Se añade visualizacion al Cart (desafio Cart View)

## Versión 0.8.1
- Se reformula uso de CartContext e integración con el Cart.
- Lógica de prevención de repetición y agrupación de items del mismo tipo en un solo item.

## Versión 0.8
- Se trabaja en CartContext con integracion de Cart, aun no completamente disponible.
- Se permite añadir items de compra al Context y eliminarlos. (falta la logica de no repetición)

## Versión 0.7 
- Se añade cartContext.js
- Se añade Cart.jsx (vacio por el momento)
- Se incluye el ItemCount dentro del ItemDetail con requerimiento por desafio.

## Versión 0.6 (Primer entrega del proyecto final)
- Se añaden páginas `about.jsx` e `index.jsx` para dar función al navbar.
- Se mejora el routing

## Versión 0.5
- Se añaden componentes `ItemDetail.jsx` , `ItemDetailContainer.jsx`
- Se añaden paginas `contact.jsx` y `products.jsx`
- Se reestrctura la funcion de ItemListContainer, Item y App.
- Se añade routing.

## Versión 0.4
- Se añade componentes `Items.jsx` y `ItemList.jsx`
    - Genera una card de Boostrap-React con cada propiedad del mapeo del mock, utilizando Promises de forma asincronica.

### Versión 0.3
- Se añade componente `ItemCount.jsx`
    - Genera un boton susceptible de tener llamada con stock y valor inicial, devuelve el valor elegido en consola.

## Versión 0.2

- Se añade componentes `CartWidget`, `ItemListContainer`
    - `CartWidget` genera represantacion en `NavBar` de un carrito.
    - `ItemListContainer` por el momento solo contiene un saludo en forma de props.

### Versión 0.1

- Se añade componente `NavBar`
- Se utiliza Bootstrap React para estilos.
