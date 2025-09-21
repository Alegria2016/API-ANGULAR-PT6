# Aplicación Angular de Gestión de Usuarios Punto 6 de la Prueba Angular.

## Descripción General

Esta aplicación Angular proporciona funcionalidades de gestión de usuarios, incluyendo listar, crear y eliminar usuarios. Cuenta con un sistema de inicio de sesión para asegurar el acceso.

## Características

Los servicios hacen uso del API: Reqres.in

-   **Listado de Usuarios:** Muestra una lista de usuarios con sus avatares, nombres y direcciones de correo electrónico.
-   **Creación de Usuarios:** Permite a los administradores crear nuevas cuentas de usuario.
-   **Eliminación de Usuarios:** Permite a los administradores eliminar cuentas de usuario existentes.
-   **Inicio de Sesión:** Asegura la aplicación, requiriendo que los usuarios inicien sesión antes de acceder a las funciones de gestión de usuarios.
-   **Cierre de Sesión:** Permite a los usuarios cerrar sesión de forma segura en la aplicación.
    -   **Búsqueda:** Implementa una funcionalidad de búsqueda para filtrar usuarios por nombre.

## Tecnologías Utilizadas

-   Angular
-   TypeScript
-   npm
-   Formularios Reactivos
-   Angular Router
-   Almacenamiento Local (para guardar el token)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

-   [Node.js](https://nodejs.org/) (>=14.0)
-   [npm](https://www.npmjs.com/) (>=6.0)
-   [Angular CLI](https://angular.io/cli)

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/Alegria2016/API-ANGULAR-PT6
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd API-ANGULAR-PT6
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

## Servidor de Desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Estructura del Código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Usa la bandera `--prod` para una construcción de producción.

## Ejecución de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas End-to-End

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de [Protractor](http://www.protractortest.org/).

## Ayuda Adicional

Para obtener más ayuda sobre el Angular CLI, usa `ng help` o consulta la [Descripción General y Referencia de Comandos del Angular CLI](https://angular.io/cli).

## Detalles de Funcionalidad

### Inicio de Sesión

-   Los usuarios pueden acceder a la página de inicio de sesión navegando a la ruta `/login`.
-   El formulario de inicio de sesión requiere un correo electrónico y una contraseña válidos.
-   Tras un inicio de sesión exitoso, se almacena un token en el almacenamiento local y el usuario es redirigido a la ruta `/users`.
-   Si falla el inicio de sesión, se muestra un mensaje de error.

### Listado de Usuarios

-   La lista de usuarios se muestra en la ruta `/users/list`.
-   La lista incluye el avatar, el nombre y el correo electrónico de cada usuario.
-   Se muestra un indicador de carga mientras se obtienen los datos del usuario.
-   Si no se encuentran usuarios, se muestra el mensaje "No se encontraron usuarios".

### Creación de Usuarios

-   Los administradores pueden crear nuevos usuarios navegando a la ruta `/users/create`.
-   El formulario de creación requiere los detalles necesarios del usuario.
-   Tras la creación exitosa, el usuario se agrega a la lista de usuarios.

### Eliminación de Usuarios

-   Los usuarios pueden eliminarse haciendo clic en el botón "Eliminar" junto a cada usuario en la lista de usuarios.
-   Se muestra un diálogo de confirmación antes de eliminar al usuario.
-   Tras la eliminación exitosa, el usuario se elimina de la lista de usuarios.

### Cierre de Sesión

-   Los usuarios pueden cerrar sesión haciendo clic en el botón "Cerrar Sesión" en la barra de navegación.
-   La función de cierre de sesión elimina el token del almacenamiento local y redirige al usuario a la ruta `/login`.

### Búsqueda

-   Los usuarios pueden buscar otros usuarios escribiendo en el campo de entrada de búsqueda.
-   La lista de usuarios se filtra según el texto de búsqueda, coincidiendo con el nombre o apellido.

## Información Adicional

### Variables de Entorno

-   La aplicación puede requerir variables de entorno para los endpoints de la API u otras configuraciones.
-   Estas variables deben establecerse en un archivo `.env` o directamente en el entorno.

### Endpoints de la API

-   La aplicación interactúa con los siguientes endpoints de la API:
    -   `POST /api/login`: Autentica al usuario y devuelve un token.
    -   `GET /api/users`: Recupera una lista de usuarios.
    -   `POST /api/users`: Crea un nuevo usuario.
    -   `DELETE /api/users/:id`: Elimina un usuario.

Asegúrate de reemplazar `<url-del-repositorio>` y `<directorio-del-proyecto>` con la URL y el nombre del directorio reales.
