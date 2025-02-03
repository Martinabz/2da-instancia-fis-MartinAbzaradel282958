# Informe académico

## Construcción

### Implementación de funciones principales

La tecnologia a dispocision de los maestros a la hora de planear las actividades a llevar a cabo tiene que evolucionar conforme a la evolucion tecnologica, ese es el racional del proyecto.
Teniendo a los maestros a nivel nacional como usuarios, la pagina presenta varios objetivos: ayudar y organizar la planificacion semanal, permitiendo que pongan las actividades diarias; registrar las competencias, o sea los requerimientos de la ANEP y dejar registro de las devoluciones o feedback de dichas actividades, lo cual es importante para las futuras planeaciones y para evaluar el cumplimiento de objetivos

Este proyecto tiene como base la pagina anterior, pero tiene varias modificaciones. En cuestión de interfaz podemos ver un cambio en el diseño y colores de la pagina. Otro de los principales cambios es la sustraccion de la planificacion "hora a hora" de la pagina anterior, por un cambio de planificacion diario completo. Algo en lo que se trabajo es en los feedbacks, siendo una parte tan importante de la planeacion, agregue un boton principal para las evaluaciones que permita registrarlos. Hubieron cambios en las clases, por ejemplo reire la clase profesores que estaba en deshuso y agregue la clase feedback con sus respectivos tests.

### Librerías externas

Por lo que va de nuestra codificacion no hemos utilizado niu

## Interfaz de usuario

### Buenas prácticas

Se espera que la interfaz tenga buena respuesta con el usuario en todo momento, asi de esta manera poder generar una retroalimentacion constante de informacion entre el sistema y el usuario. Tambien se trata de lograr un diseño simple sin sobresaturacion del espacio en donde las funcionalidades esten claras.

### Usabilidad

Se implementa esta pagina para que pueda ser utilizada tanto en sistemas operativos de computadora, como moviles. Para eso se usa la herramienta boostrap en la cual se podran previsualizar los cambios y como se verian en distintas definiciones.

### Accesibilidad

Para mantener una buena accesibilidad en todo momento vamos a utilizar la herramienta "Wave" que nos permite identificar errores y recomendaciones acerca de la accesibilidad de nuestra pagina asi como conceptos a mejorar en el diseño y estetica. De esta manera podremos seguir un estandar que asegura poder cubrir las necesidades de una gran parte de los usuarios posible de nuestra pagina.

## Codificación

### Configuración de entorno de desarrollo

Para comenzar a desarrollar hay que descargar el add-on "Live server" que es de gran ayuda porque permite ver los cambios a nuestra pagina en tiempo real al guardar los cambios, y tambien utilice la herramienta web "Wave" que nos da indicaciones para estandarizar la pagina y que esta sea accesibile para todo tipo de personas. "Wave" esta descargado como add-on para el navegador que utilicemos mientras que "Live server" es una extension del editor de texto.

### Estándares de codificación

En los estandares de codificacion use la documentacion de google para javascript disponible en "https://github.com/google/styleguide", dentro de los estandares destaco el "Formatting" y el "Naming" ya que fue lo que se tuvo mas en cuenta para que el codigo quede mas prolijo y se pueda entender mejor. Ademas de seguir los puntos de esta guia, se busco generar un codigo homogeneo, asi de esta manera poder establecer un ritmo y estilo que se mantenga desde el principio hasta el fin de la lectura del mismo, especialmente para terceros que no esten familiarizados con el mismo.

#### Mediciones, limites y practicas importantes

- Largo columna = 80
- Comentarios explicativos
- Espacios verticales entre metodos

### Buenas prácticas de OOP

En el codigo siempre tratamos de mantener los objetos ordenados, encapsulando bien tanto sus atributos privados como publicos, limitando la cantidad de estos ultimos para que el comportamiento de los objetos no sea muy transparente, ademas de esta manera podemos asegurar que en un futuro el codigo va a ser mas facil de mantener y modificar por terceros.

### Análisis estático de código

## Checkpoint obligatorio 2

Incluir un resumen del avance en **codificación de la IU y clases del dominio**
Se evaluará de acuerdo al grado de avance

## Test unitario

### Buenas prácticas

Primero usamos el formateador de lint para mantener una estructura monotona y homogenea a traves del codigo, ademas de poder darnos cuentas de algunos errores o warnings que pudiesen saltar.
Usamos copilot para la creacion de los archivos .test.js.

### Informe de cobertura

Al utilizar JEST para las pruebas unitarias junto con lint, pudimos confirmar que todas las funciones con sus branches de casos alternos funcionan de manera correcta y adecuada.
En las pruebas establecidas tuvimos un coverage de 100% dando a entender un buen nivel de practicas unitarias.

## Reflexión

### Detalle del trabajo individual

### Técnicas aplicadas y aprendizajes
