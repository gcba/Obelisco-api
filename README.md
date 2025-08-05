# Proyecto Node.js + MariaDB

Este proyecto implementa un backend desarrollado en Node.js con TypeScript, utilizando MariaDB como base de datos. A continuación se detallan los pasos para configurar, instalar dependencias y ejecutar el entorno en modo producción.

---

## 📦 Requisitos

- Node.js (v18 o superior)
- npm (v9 o superior)
- MariaDB (v11.8.2 o compatible)

---

## 🗃️ Base de datos

### 1. Crear la base de datos y tablas

El archivo de configuración SQL se encuentra en:

database/config.sql

Podés ejecutar el script usando el cliente de MariaDB:

```bash

mysql -u tu_usuario -p < database/config.sql

```

---

### Esto creará:

- La base de datos
- Las tablas necesarias
- Los registros iniciales

## Levantar el proyecto

```bash

cd source/

```

### Instalar dependencias

```bash

npm install

```

## Configurar las variables de entorno

Creá un archivo .env en la raíz del directorio source/ con las siguientes variables:

```bash

env
NODE_ENV=production
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=nombre_de_base

```

Asegurate de que NODE_ENV esté en production para el entorno productivo.

## Iniciar el servidor

```bash

npm start

```

📁 Estructura del proyecto
├── database/
│ └── config.sql # Script de creación de base de datos y tablas
├── source/
│ ├── dist/ # Código compilado (si está presente)
│ ├── .env # Variables de entorno
│ ├── package.json
│ └── ...

### RUTA RAIZ

```bash
# Ruta raíz
http://localhost:3000/api/
```

```bash
# Ruta no existente
http://localhost:3000/api/
```

```bash
# Ruta footer completo
http://localhost:3000/api/footer/complete
```

```bash
# Ruta footer legales
http://localhost:3000/api/footer/legales
```
