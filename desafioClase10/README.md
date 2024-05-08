# desafiosBackendAguirreFunesSabrina

### Cuarto desafío (carpeta _"desafioClase10"_)

A partir del proyecto entregado en la primer pre-entrega, se configuro el servidor para integrar el motor de planitllas "Handlebars" instalando un servidor de socket.io.

Se adjunta capturas del funcionamiento en el navegador.

#### Nuevas rutas

- ruta _/_ -> utilizando únicamente handlebars, muestra una vista con el listado de todos los productos

![alt text](./src/public/img/image.png)

- ruta _/realtimeproducts_ -> utilizando en conjunto handlebars y websocket, muestra una vista con:
  - un formulario para agregar productos
  - un formulario para eliminar un producto a partir de un id
  - un listado de todos los productos (el cual se actualiza automáticamente cada vez que se agrega o elimina un producto)

Prueba de agregar productos:
![alt text](./src/public/img/image-1.png)
![alt text](./src/public/img/image-2.png)

Al dar al botón de "Agregar producto" el formulario se limpia y en el listado en tiempo real de productos, al final de la página y sin necesidad de actualizarla, aparece el producto recién agregado:
![alt text](./src/public/img/image-3.png)

Prueba para eliminar productos:
![alt text](./src/public/img/image-4.png)

Al dar al botón de "Eliminar producto" el formulario se limpia y en el listado en tiempo real de productos, sin necesidad de actualizarla, se puede ver que falta el producto recién eliminado:
![alt text](./src/public/img/image-5.png)

#### Pasos para ejecutar el servidor

- Primero se deberá entrar en la carpeta del desafío con el comando:

```
cd desafioClase10
```

- Una vez dentro de la carpeta se instalarán las dependencias con el comando:

```
npm install
```

- Finalmente se podrá poner en marcha el servidor con el comando:

```
npm run dev
```
