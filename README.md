# Sandbox Express

Proyecto base de una **API REST** en `NodeJS`. Con el fin dejar plasmado los conocimientos adquiridos con el tiempo, y construir un proyecto que pueda ayudar en futuros desarrollos, son las razones principales por la que nace esta iniciativa.

## Características

### Estructura de carpetas

```bash
tree -d -A -C -I 'node_modules|db|dist'
```

```text
.
├── config            => Configuraciones de la aplicación
├── db                => Contenedor de base de datos
├── dist              => Contenedor del build de la aplicación
└── src               => Código fuente de la aplicación
    ├── app           => Configuración de la APP
    ├── controllers   => Responsable de la lógica de la aplicación
    ├── exceptions    => Contenedor de "Exception"
    ├── helpers       => Contenedor de "Helper"
    ├── middlewares   => Contenedor de "Middleware"
    ├── migrations    => [ORM] Migraciones de la base de datos
    ├── models        => [ORM] Modelos de la base de datos
    ├── repositories  => Responsable de recuperar datos de fuentes externas como bases de datos, api, almacenamiento local, etc.
    ├── routes        => Definiciones de los recursos de la aplicación
    ├── seeders       => [ORM] Sembradores de la base de datos
    └── services      => Responsable de la lógica de negocio y de proveer la información a los controladores
```

1. Routes
1. Controllers
1. Services
1. Repositories

### Dependencias

#### Principales

- Express (Framework de aplicación web de Backend para NodeJS)
- SQLite (Sistema de gestión de bases de datos relacional)
- Nodemon (Herramienta de desarrollo de aplicaciones basadas en NodeJS que reiniciar automáticamente la aplicación cuando se detectan cambios)
- Joi (Lenguaje de descripción de esquemas y el validación de datos)
- Config (Organiza configuraciones jerárquicas para aplicación separada por ambiente)
- Sequelize (Herramienta ORM de NodeJS basada en promesas para PostgreSQL, MySQL, MariaDB, SQLite y Microsoft SQL Server)

#### Secundarias

- Morgan (Middleware registrador de solicitudes HTTP para NodeJS)
- Http-Status-Codes (Librería de constantes que enumeran los códigos de estado HTTP, que ayuda a una programación más semántica)

## Códigos de estado

| Método | Códigos               |
| ------ | --------------------- |
| GET    | 200 - 400 - 404 - 500 |
| POST   | 201 - 400 - 500       |
| PUT    | 200 - 400 - 404 - 500 |
| DELETE | 204 - 400 - 500       |

## Comenzando

### Pre-requisitos

- Node: v10 para arriba

### Instalación

```bash
npm install
```

```bash
npm run build
```

```bash
npm run start
```

Y para ejecutar en ambiente de desarrollo...

```bash
npm run dev
```

## Prueba

```bash
npm run test
```

### Verificación de codificación

```bash
npm run lint
```

## Construido con

- [Express](https://expressjs.com/)

## Swagger

- https://swagger.io/docs/specification/about/
- https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
