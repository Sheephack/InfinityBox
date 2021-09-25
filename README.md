# **Infinity-Box**
E-Commerce de venta de Lootboxes usando Create-React-App.

# Navegación:
![alt text](./src/img/app-working.gif)

Se puede acceder online desde el siguiente link: [https://sheephack.github.io/InfinityBox/](https://sheephack.github.io/InfinityBox/)

# Instrucciones para usar la aplicación localmente:
1. Descargar las dependencias desde el directorio raiz con:
    ### `npm install`
2. Correr la aplicación localmente en: [localhost:3000](http://localhost:3000) con:
    ### `npm start` 
3. Para hacer un build de deployment (produccíon) usar:
    ### `npm build`

# Dependencias:
La aplicación utiliza las siguientes dependencias:
- React-Bootstrap (Framework de estilos)
- Bootstrap (por uso de clases)
- Bootstrap-icons (uso de iconos)
- React-icons (idem item superior)
- Node-SASS (creación de estilos)
- Firebase (uso de base de datos)
- SweetAlerts2 (libreria de JavaScript para mostrar alertas)
- React-router-dom (para navegación)
- React-router-hash-link (navegación entre hashs internos de la aplicación)

# **Versiones:**
# Versión 1.8.8 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
## Versión 1.8.8 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
    - Se cambia HashRouter a Router luego de funcionalidad casi optima.
## Versión 1.8.7 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
    - Se cambia Router a HashRouter
## Versión 1.8.7 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
## Versión 1.8.6 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
    - Se elimina dependencia, no genera resultados satisfactorios.
## Versión 1.8.5 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
    - Se utiliza dependencia gh-pages, se utiliza metodo de dependencia.
## Versión 1.8.4 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.
    - Se utiliza dependencia gh-pages, pero se utiliza metodo convencional.

## Versión 1.8.3 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages. (Nuevamente, problema con rutas relativas. Nuevo Build)

## Versión 1.8.2 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages. (Nuevamente, problema con rutas relativas.)

## Versión 1.8.1 (HotFix)
- Se intenta solucionar problema con hosteo en GitHub Pages.

## Versión 1.8 (RELEASE)
- Se cambia la estructura general de `Readme.md` para optimizar la documentación de la aplicación.
    - Se hacen correcciones ortográficas.
- Se cambia el GIF en `Readme.md` por la versión actualizada final de la aplicación.
- Se añade la carpeta `.vscode` a `.gitignore`.
    - Se elimina la carpeta `.vscode` del repositorio.
- Se genera build para producción.
- Se agrega "homepage" a `package.json`
- Se modifica `url()` por `URL()` en archivos fuente SASS.

## Versión 1.7 (RC)
- Se añade lógica de borrado de carrito tras enviar compra a `Checkout.jsx`.
- Se separa de `Cart.jsx` la renderización, de los items del cart y ahora se importa desde `CartItem.jsx` (nuevo componente).
- Se crea `BriefItem.jsx` para ser renderizado en `Brief.jsx` dentro del `Checkout.jsx` (Contiene funcionalidad de remoción de items).
- Se añade lógica de renderización de mensaje 404 (no literal) al no encontrar un item de la lista de productos al ingresar una ruta con id inexistente, o con desconexion con Firestore.
- Se añade un valor nuevo al objeto de creación de orden llamado "state".
- Se prepara el sitio para su deployment final.

## Versión 1.6
- Se reemplaza `favicon.ico`, `logo192.png` y `logo512.png` por las versiones correctas asociadas al sitio.
- Se elimina el componente `CheckoutToggler` ya que quedo en desuso.
- Se añaden estilos al componente `Cart.jsx`
    - Se estiliza los items del carrito para ser mas atractivos y funcionales.
    - Se estiliza el carrito aun cuando esta vacío
    - Se adapta el sitio para matener el footer en la seccion inferior de la pagina cuando el contenido es muy poco en el main.
    - Se añade uso de Router-Hash en link de "Ver todos los productos" del Carrito vacio.
- Se reordenan los componentes en el Router, para evitar que el resto del sitio sea mostrado en la vista de carrito.
- Mejoras generales en `Checkout.jsx`:
    - Se mejora la logica de confirmación de e-mail. Ahora al ser diferentes, arroja mensaje via SweetAlerts2 y resetea el formulario.
    - Se añade `required` a todos los elementos del form.
    - Se estiliza correctamente el botón de enviar formulario.
    - Se elimina Checkbox innecesario.
    - Se eliminan todos los `console.log()` que se disparaban al enviar una compra.
- Se cambia el link de "Volver a todos los productos" del `ItemDetail` a "Volver al listado de la categoria", evitando mostrar todos los productos para volver atras.
- Se crea el componente `Brief.jsx` (Vacio)
- Se modifica el comportamiento del link "Todos los productos" en el componente `Menu.jsx` para utilizar Router-Hash.
- Se realizan cambios menores en Readme.md.

## Versión 1.5
- Se implementa collección de guardado de e-mails de usuarios registrados en el footer.
- Se arregla el problema de que el formulario de `Checkout.jsx` no se reseteaba tras su uso.
- Se reemplaza div generado con Spinner en `ItemListContainer`
    - Se optimiza el loader.
    - Se elimina `setTimeout` del loader, ya que quedo de una iteracion con JSON local para simular tiempos de carga.
- Se reestiliza `ItemListContainer`, `ItemCount`, `Item` e `ItemDetail` para generar una lista ordenada con menos detalles y mas funcional en `_items.scss`.
- Se eliminan los `console.log()` de todos los componentes que ya no lo requieren. (Se planifica implementar metodos alternativos para async catch).
- Se añade Toast de SweetAlerts2 al agregar items al carrito, al removerlos y al enviar el mail para recibir novedades en el footer.
- Se añade Hashlink a componente `PortraitItem` para redireccionar al usuario al sector de compras.
- Se elimina directorio `data` que estaba en desuso luego de implementar Firestore.
- Se elimina `contact.jsx`, `about.jsx` y `products.jsx`, o sea, la totalidad de la carpeta `pages` debido a la nueva funcionalidad de los componentes de representación.
    - Se modifica el Router en función de este cambio.

## Versión 1.4
- Implementación de React-router-hash-link para generar movimiento interno entre hash's usando Router al cargar las categorias.
    - Se modifica las importaciones del componente `Menu` para reflejar este cambio.
- La pagina renderizada en `Index.jsx` paso a ser un componente llamado `InPromo.jsx`.
- Se crea el componente `About.jsx` con instrucciones de funcionamiento del e-commerce y CTA a explorar todos los productos.
- Se incorpora el componente `ItemListContainer` dentro del sitio de forma organica. (Faltan detalles y re organizar)
- Se crea el componente `Footer.jsx` con sección de contacto. (Se programa para realizar, el envio de correo electronico a Firebase)
- Se crean imagenes de estilado `about-img.png` y `footer-img.png` para generar coherencia grafica.
- Se añaden estilos para el footer en `_footer.scss`

## Versión 1.3
- Se incorporan categorías orgánicas dentro del proyecto.
    - Se añade el componente `Menu` que contiene el menu desplegable con las categorias con llamada async.
    - Se modifica el componente `ItemListContainer` para recibir llamados por categorias y por la totalidad de los productos.
    - Se crea una nueva coleccion en Firestore para almacenar datos de categorias.
    - Se modifica el comportamiento del router para redireccionar las categorias por su nombre.
- Se añaden estilos para la barra de desplazamiento lateral en `_scrollbars.scss`

## Versión 1.2
- Se solucionan múltiples advertencias de compilación de React.
    - Se solucionan problemas en algunas funciones async.
- Se añade uso de key en mapeo de ítems.
- Se añaden `16` productos a Firestore de diferentes rarezas para poder generar categorias mas populosas.
- Se modifica el comportamiento del `ItemListContainer` para poder albergar los nuevos productos.
- Se modifica la estetica general de todos los productos para alinearlos con los nuevos.
- Se soluciona problema de interacción con `Checkout`. (No se podia interactuar con el componente)
- Se elimina `iboxlogo.png` de la carpeta public y se ubica en un correcto lugar.
- Se programa la eliminación de los componentes dentro del directorio `pages` a fin de hacer mas organico el proceso de reemplazo de componentes.
- Se cambia el background del sitio por una animación sutil de degradado.

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
- Se comienza a implementar estilos vía SASS 

## Versión 1.0 (Primera versión completamente funcional)
- Se integra el uso de Firebase con recepción de órdenes de compra y devolución de numero de orden
- El proceso de selección de productos, creación de carrito y finalización de compra esta completo.
    - A partir de este commit, los cambios realizados en el proyecto a nivel funcional, solo seran en pos de incrementar la optimización, la estetica y la experiencia del usuario.
    - Se programa incrementar la cantidad de productos y la categorización de los mismos.

## Versión 0.9
- Se elimina el uso de async mocks. Se elimina el archivo productsJson.js
- Se implementa uso de Firebase, con reemplazo de los items del mock. Todas las llamadas son remotas.
- Se hace uso de llamada simple en ItemDetailContainer.

## Versión 0.8.2
- Se finaliza el uso de Context para la correcta manipulacion del cart.
- Se añade visualización al Cart (desafío Cart View)

## Versión 0.8.1
- Se reformula uso de CartContext e integración con el Cart.
- Lógica de prevención de repetición y agrupación de items del mismo tipo en un solo item.

## Versión 0.8
- Se trabaja en CartContext con integracion de Cart, aun no completamente disponible.
- Se permite añadir items de compra al Context y eliminarlos. (falta la logica de no repetición)

## Versión 0.7 
- Se añade cartContext.js
- Se añade Cart.jsx (vacío por el momento)
- Se incluye el ItemCount dentro del ItemDetail con requerimiento por desafio.

## Versión 0.6 (Primer entrega del proyecto final)
- Se añaden páginas `about.jsx` e `index.jsx` para dar función al navbar.
- Se mejora el routing

## Versión 0.5
- Se añaden componentes `ItemDetail.jsx` , `ItemDetailContainer.jsx`
- Se añaden paginas `contact.jsx` y `products.jsx`
- Se reestructura la función de ItemListContainer, Item y App.
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
