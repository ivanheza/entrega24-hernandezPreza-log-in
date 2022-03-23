# Desafío LOG-IN POR FORMULARIO

El desarrollo de la app se encuentra en la carpeta server

##### Inicializar desde la consola dentro de la carpeta server con:

-  **npm run start:** inicializa el proyecto

Para este desafío persistencia de los datos esta basada en FileSystem y la persistencia de las sesiones en MONGO

## LOG-IN

-  La aplicación inicia en el log-in para acceder a las demás rutas, se debe "iniciar sesión" con un nombre

## MOCKS Productos

-  para genererar los productos via mocks, usar el boton addMocks

## Chat Cambios

-  Para la persistencia del chat se esta utilizando fileSystem. Esto con la finalidad de aplicar la normalización de datos en los objetos anidados.

Acceder al proyecto en la dirección http://localhost:9000

### Git Ignore

> > > node modules y archivos .DIR

### Dependencies

-  Para el servidor, manejo de rutas [Express JS](https://expressjs.com/es/ "Ver más")
-  Para el manejo de sessions en mongo [connect-Mongo](https://www.npmjs.com/package/connect-mongo "Ver más")
-  Para manejo de session en la app [Express Session](https://www.npmjs.com/package/express-session "Ver más")
-  Para el render del frontend [Express Handlebars](https://www.npmjs.com/package/express-handlebars "Ver más")
-  Para la inicializacion e implementación de las querys [Knex JS](https://momentjs.com/ "Ver más")
-  Para el timestamp y fechas [Moment JS](https://momentjs.com/ "Ver más")
-  Para la implementación de mysql [mysql](https://momentjs.com/ "Ver más")
-  Para la normalización de objetos anidados en la instancia de mensajes [normalizr](https://www.npmjs.com/package/normalizr "Ver más")
-  Para la configuracion del servidor y la comunicación entre el backend y frontend [socket io](https://socket.io/ "Ver más")

-  Se utilizó la dependencia de dotenv para la implementacion y uso de variables de entorno .env [dotenv](https://www.npmjs.com/package/dotenv "Ver más")

#### Created by: **Ivan Hernández Preza**
