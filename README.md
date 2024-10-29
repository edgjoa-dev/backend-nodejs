# Backend RESTfull Api con Nodejs

## Reconstruir dependencias de node

> Recuerda correr ``` npm i``` para reconstruir los módulos de node necesarios para levantar aplicación.

```
npm install
```

## Variables de entorno

> Agrega un archivo ```.env``` en la raíz del Filesystem de la aplicación.

## Archivo de configuración de Jest para testing.

> Agrega un archivo de configuración en la raíz del proyecto ``` jest.config.js``` con el siguiente contenido.


```
// jest.config.js
module.exports = {
    // Especifica el entorno de prueba
    testEnvironment: "node",

    // Carpeta donde Jest buscará archivos de prueba
    roots: ["<rootDir>/src"],

    // Patrón para identificar archivos de prueba (puedes ajustarlo según prefieras)
    testMatch: ["**/?(*.)+(spec|test).js"],

    // Limpia automáticamente los mocks entre pruebas
    clearMocks: true,

    // Define el directorio donde Jest guardará los resultados de cobertura
    coverageDirectory: "coverage",

    // Especifica qué archivos incluir en la cobertura (opcional)
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/**/*.test.js" // Excluye archivos de prueba del reporte de cobertura
    ],

    // Opcional: Configura transformadores, si usas Babel o alguna otra herramienta
    transform: {},
};
```

## Crea los scripts necesarios para correr la aplicación y testing.

> Edita el archivo ``` package.json``` y añade los siguientes scripts:

```
  "scripts": {
    "start": "node src/app.js",
    "dev": "node --watch src/app.js",
    "test": "jest",
    "test:dev": "jest --watchAll --coverage"
  },
```
> Para levantar el servidor corre el comando ``` npm run dev``` y para correr los test puedes correr ``` npm run test:dev ```. El script ```npm run test ``` es por si trabajas con imágenes de Docker o github actions para CI/CD.