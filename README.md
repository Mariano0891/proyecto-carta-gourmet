# Proyecto Carta Gourmet

Este es mi proyecto para el curso de React de Coderhouse.
El mismo esta basado en el diseño de en una app de e-commerce real, que desarrollare posteriormente, para un emprendimiento de comidas envasadas al vacio.
Se puede ver el diseño de esta ultima en los mockups incluidos en este repositorio. 

## Consideraciones

### Componente Loader
El mismo está dentro de la carpeta AnimacionCarga con ese mismo nombre. Decidí hacerlo separado del resto de los documentos porque está desarrollado desde cero para emular el logotipo de la marca, incluso tiene su propio archivo de CSS puro.

### Firebase

Toda la base de artículos esta subida a Firebase y los pedidos generados se graban correctamente es esa colección. Respecto a estas ultimas, vale destacar que se recupera el Id generado y en este momento se muestra solo por consola.
Por otra parte, continúo trabajando para poder hacer la actualización de los stocks disponibles de cada artículo cada vez que se genera una nueva orden.
Por último aclaro que las imágenes de los productos no las subí a Firestore porque son todas tomadas de la web así que considere que no era necesario subirlas allí.

### Formulario de Formik

Para el formulario de checkout utilice la libreria de Formik la cual resulto ser bastante amigable para el armado y envio del formulario. El problema que encontre es para poder hacer el mensaje de confirmacion del pedido ya que se me dificulto para poder imprimir los parametros en el mismo (continuo trabajando para resolver este inconveniente)

### Deploy

El deploy esta hecho en Netlify con la siguiente dirección

https://proyecto-carta-gourmet.netlify.app/

### Código comentado

Podrán encontrar algunos recortes de código comentado, que puede consistir básicamente en algunas formulas que fueron reemplazadas (como por ejemplo las promises realizadas al async mock luego de que este ultimo fuera reemplazado por Firebase) o también podrán ser algunas funciones que todavía no pude implementar por algún inconveniente pero que continuo trabajando para resolver.


