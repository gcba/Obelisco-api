<p align="center">
  <a href="https://gcba.github.io/" target="blank"><img src="https://gcba.github.io/img/header/Obelisco-logo.svg" width="200" alt="Obelisco Logo" /></a>
</p>

<p align="center">La plataforma de documentación para el Backend API de
  <a target="blank" href="https://gcba.github.io/">Obelisco</a>
</p>

## Descripción

Es la plataforma de documentación para el Backend API de Obelisco destinado a simplificar el trabajo de desarrolladores en proyectos y activos digitales del Gobierno de la Ciudad de Buenos Aires.

Accedé fácilmente a los endpoints que proporcionan información actualizada sobre diversos aspectos de la vida en la ciudad.

Utiliza la [documentación](https://gcba.github.io/obelisco-api/) y creá aplicaciones innovadoras con datos confiables y accesibles.

## Tecnología Utilizada y Requisitos

Este proyecto es una API REST desarrollada utilizando NestJS versión 10.0.0 y Node.js versión 16 o superior.

### Tecnología Utilizada:

- **Framework Backend**: NestJS 10.0.0
- **Lenguaje de Programación**: TypeScript
- **Entorno de Ejecución**: Node.js v16 o superior

### Requisitos del Sistema:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/es/download/)
- NestJS: Se instala automáticamente como dependencia del proyecto, pero puede ser útil tenerlo globalmente instalado para la línea de comandos.

## Instalación

```bash
npm install
```

## Ejecutando la aplicación

```bash
# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rutas

```bash
# Ruta raíz
http://localhost:3000/api/
```

```bash
# Ruta no existente
http://localhost:3000/not-found
```

```bash
# Ruta footer completo
http://localhost:3000/api/footer/complete
```

```bash
# Ruta footer legales
http://localhost:3000/api/footer/legales
```
