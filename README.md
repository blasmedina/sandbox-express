# Sandbox Express

Proyecto base de una API REST. Con el fin dejar plasmado los conocimientos adquiridos con el tiempo, una de las razones principales porque nace la iniciativa de crear y mantener este proyecto.

## Características

### Estructura de carpetas

```
tree -d -A -C -I 'node_modules|db|dist'
.
├── config            => Configuraciones de la aplicación
└── src
    ├── app           => Punto de entrada de la aplicación
    ├── controllers   => Definiciones de la lógica de la aplicación
    ├── exceptions    => Contenedor de "Exception" utilizado por la aplicación
    ├── helpers       => Contenedor de "Helper" utilizado por la aplicación
    ├── middlewares   => Contenedor de "Middleware" utilizado por la aplicación
    ├── migrations    => Migraciones de la base de datos para el ORM
    ├── models        => Modelos de la base de datos
    ├── repositories  => Repositorio de información
    ├── routes        => Definiciones de los recursos de la aplicación
    ├── seeders       => Sembradores de la base de datos para el ORM
    ├── server        => Configuración del servidor
    └── services      => Servicios externos consumidos por la aplicación
```

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
- Express-Http-Context (Middleware almacenador de contexto)
- Http-Status-Codes (Librería de constantes que enumeran los códigos de estado HTTP, que ayuda a una programación más semántica)
