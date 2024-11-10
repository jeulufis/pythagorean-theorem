# Documentación del Proyecto: Teorema de Pitágoras en React

<div style="display: flex; justify-content: space-around;">
    <img src="https://github.com/user-attachments/assets/db944796-4ab7-4e23-99f0-524e564cd8bd" alt="Imagen 1" width="310" title="Componente App.jsx"/>
    <img src="https://github.com/user-attachments/assets/e8e0e42a-a446-4c5a-825a-de579e8b0a66" alt="Imagen 2" width="310" title="Componente teorema-pitagora.jsx"/>
    <img src="https://github.com/user-attachments/assets/f2b66403-02ac-49a1-8f4d-625e2780e00c" alt="Imagen 3" width="310" title="Componente nota-pitagora.jsx"/>
</div>

## Descripción:

Este proyecto es una aplicación web construida con React que permite calcular la longitud de la hipotenusa de un triángulo rectángulo dado el valor de sus dos catetos. Utiliza el teorema de Pitágoras, que establece que en un triángulo rectángulo la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa. Es ideal para estudiantes y personas interesadas en matemáticas básicas y su implementación en programación.

Requisitos:

- Node.js: Para ejecutar la aplicación React, necesitas tener Node.js instalado.
- NPM o Yarn: Un gestor de paquetes para instalar las dependencias.

Instalación y Configuración:

Clona el repositorio:
```
$ git clone https://github.com/jeulufis/pythagorean-theorem.git
```

Accede al directorio del proyecto:
```
$ cd pythagorean-theorem
```

Instala las dependencias:

```
$ npm install
```

o, si usas Yarn:
```
$ yarn install
```
Uso
Para iniciar la aplicación en un entorno de desarrollo, ejecuta:

```
$ npm start
```
Esto lanzará la aplicación en http://localhost:3000, donde podrás ingresar los valores de los catetos y obtener el resultado de la hipotenusa.

Estructura del Código
La estructura principal del código sigue el patrón de componentes de React:

App.jsx: Componente principal que gestiona la interfaz y calcula el resultado usando una fórmula básica.
nota-pitagora.jsx: Componente que permite al usuario ver como se creo el teorema de pitagoras.
teorema-pitagora.jsx: Componente que muestra el resultado calculado de la hipotenusa.
footer.jsx: Componente que muestra informacion del creador.

Cómo Contribuir

Si deseas mejorar o agregar funcionalidades, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu nueva funcionalidad:
```
$ git checkout -b nueva-funcionalidad
```

Realiza tus cambios y crea un pull request.
