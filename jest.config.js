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
