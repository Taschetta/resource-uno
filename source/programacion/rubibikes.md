---
layout: 'base.njk'
titulo: RubiBikes
desarrollo: 2020
cover: rubibikes-cover.png
color_primary: '#fdde77'
color_secondary: '#6b7280'
descripcion: Tienda virtual con varios metodos de pago y un panel de administracion personalizado. Desarrollada con Vue, Nuxt y AdonisJS. Montada en una VPS Linux.
tags: trabajos
---

<h2 class="skew">
  RubiBikes
</h2>
<div class="center stack">

  A mediados de 2020, con la pandemia ya en un punto en el que se empezaba a notar que iba para largo, empezamos en Cluster este proyecto para poner en práctica todo lo qué había venido aprendiendo desde principios de año. Dentro de la incertidumbre que fue ese año, y con el mundo en esa pausa rara que todos conocimos, estuvo bueno enganchar un proyecto como para tener al menos una seguridad.

  RubiBikes es un taller de motos y venta de repuestos de Uruguay. Ellos tenían todo el manejo de las ventas online por MercadoLibre, pero querían tener su propio espacio como para no tener que depender tanto de los requerimientos y los costos que te impone esa plataforma.

  La idea, entonces, era tener su propia página: poder mostrar sus productos, poder manejar las ventas. También querían poder administrar los datos de la página de forma cómoda, por lo que iba a hacer falta también tener un panel de administración para todo esto.

  Entonces, definimos que la pagina iba a tener tres partes:

  - un frontend para la tienda en si,
  - un frontend para el panel de administración, y
  - un backend para manejar toda la lógica de negocio

  Para los dos fronts decidimos usar Vue con Nuxt, que era lo que ya venía aprendiendo, y para el backend usamos el framework AdonisJS. Elegimos estos frameworks porque ya en la oficina tenían otro proyecto que usaba esto mismo, y del que quizás mas adelante me terminaría encargando si hacia falta un nuevo módulo o algo así (cosa que terminó pasando). Todo esto, además, lo montamos en una VPS con Linux. De esto si que no tenia casi experiencia, pero investigando a pleno como hacer cada cosa siento que pude aprender un montón.

  Entonces arrancamos el proyecto. Nacho se encargó de todo el diseño de la base de datos (del que aprendí muchísimo), de hablar con Ducis (quienes iban a administrar la página para RubiBikes) y de definir bien los requerimientos, y yo me encargué de toda la programación.

  El proyecto en si llevo mas tiempo del que nos hubiera gustado. Por suerte no teníamos muchas presiones al respecto de tiempos y plazos de entrega, ya que desde un principio les planteamos a Ducis y a RubiBikes que usaríamos a este proyecto para aprender, y que por lo tanto habría demoras y toda la cosa (lo que se vería reflejado también en un costo mucho mas bajo).

  Y así y todo, con las idas y vueltas, los rediseños y las reescrituras de código, siento que aprendí más con este proyecto que con cualquier otra cosa que haya hecho hasta ahora. Tener la libertad y el tiempo para experimentar con distintas formas de hacer las cosas, de organizar el código, siento que me hizo ver a la programación de una forma en la que nunca la había visto.

  También, mientras iba pasando el tiempo y se iba acumulando el código junto con las distintas funcionalidades de la pagina, pude empezar a entender en serio el peso que va tomando el código para la productividad en un proyecto de este tamaño. Pude ver que tan útiles fueron las distintas cosas que fui haciendo al tener que volver sobre ellas para agregar nuevas funcionalidades o corregir errores. ¿Que cosas fueron fáciles de modificar después de un mes de hechas? ¿Que cosas tuve que reescribir por completo al ver que eran imposibles de modificar?

  Creo que esto fue lo que mas pude aprender de este proyecto. la necesidad de mantener el código tan simple como se pueda y tan complejo como sea necesario. No creo haber podido sacar una fórmula perfecta para manejar la complejidad de los proyectos, pero si al menos empezar a tener una vocecita en la cabeza diciéndome "no te compliques al pedo", así como también una mínima intuición de cuando hace falta complicarse un poco mas.

  Mientras escribo esto estamos esperando que RubiBikes termine de cargar los últimos datos que faltan para poner en funcionamiento la página. Vamos a ver como sale todo...

</div>
