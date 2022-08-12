# Control de Asistencias - G8

## Configuración del ambiente
Al descargar el código fuente se encontrarán ambos projectos (Backend y Frontend). Lo más importante es configurar los archivos `.env` en las dos carpetas. En el Backend se deben ingresar las variables de configuración de la base de datos de la siguiente forma:
  - DB_HOST=`<host>`: host de la base de datos.
  - DB_PORT=`<puerto>`: puerto de la base de datos.
  - DB_USERNAME=`<usuario>`: usuario con los permisos para crear, editar y eliminar bases de datos.
  - DB_PASSWORD=`<contraseña>`: contraseña del usuario mencionado.
  - DB_DATABASE=CONTROL_ASISTENCIA_G8 como fue mencionado en el enunciado.

En el caso del Frontend solo se debe agregar el endpoint donde corre el Backend de la siguiente forma: VUE_APP_BACKEND_API='`<url>`'.

## Intrucciones Backend

- ### Instalación
El proyecto fue desarrollado en Node.js con TypeScript y Express, es necesario tener Node en una versión actualizada, yo utilicé la [16](https://nodejs.org/es/download/) y el gestor de paquetes de Node, NPM, mayor a la 8 (que viene con Node por defecto). De igual forma, el proyecto utiliza PostgreSQL por lo que debe tenerse en cuenta que se trabajó con la versión [11](https://www.postgresql.org/download/) de esta base de datos .

- ### Ejecución
El proyecto corre por defecto en el puerto `3000`, si requiere cambiar este puerto deberá ingresar al archivo `index.ts` dentro de la carpeta `src`. Si no es el caso puede seguir a instalar las dependencias del proyecto usando el comando `npm install` en la consola, ubicándose dentro de la carpeta `backend`. Al finalizar la instalación resta usar el comando `npm start` para correr el proyecto.

## Intrucciones Frontend

- ### Instalación
El proyecto fue desarrollado en Vue.js 3 y Vuetify 3 pero el único prerequisito es tener Node en una versión mayor a la 15, entonces se puede correr sin problemas. Dado que esta es una versión experimental para Vuetify se tienen algunos conflictos con las dependencias. Sin embargo, no impide que la aplicación funcione correctamente.

- ### Ejecución
El proyecto corre por defecto en el puerto `8080`. Para instalar las dependencias se debe usar el comando `npm install --force` en la consola, ubicándose dentro de la carpeta `frontend`, el `--force` es debido al conflicto con otras versiones. Al finalizar la instalación resta usar el comando `npm run serve` para correr el proyecto y abrir el navegador para usarlo, escribiendo en la barra de búsqueda `localhost:8080`.
