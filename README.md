# Live Coding Exercise
**Cargo:** Desarrollador Backend Junior || GLOWICOM  
**Duración total:** 60 min (coding) + 5 min (demo)  

---

## 1. Enunciado del Ejercicio

### Mini-API de Inventario

> Implementa un micro-servicio en Node.js que exponga endpoints para registrar y listar productos en la tabla `products` de una base relacional (PostgreSQL o MySQL).

#### Requerimientos funcionales

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| **POST** `/products` | • Recibe JSON<br>• Valida `name` (string, no vacío), `price` (n > 0), `stock` (int ≥ 0)<br>• Responde **201 Created** con el registro |
| **GET** `/products` | Devuelve lista completa ordenada por `id` asc. |
| **GET** `/products/:id` <br>(*bonus*) | Devuelve un producto o **404** si no existe |

#### Requerimientos técnicos

| Área | Detalle |
| ---- | ------- |
| **Framework** | Express, Fastify o Hapi (elección libre) |
| **ORM / Query Builder** | Sequelize, Prisma, Knex o SQL “puro” |
| **Base de datos** | Tabla ya creada:<br>`CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2), stock INT);` |
| **Código** | Un archivo `index.js` basta; incluir conexión BD, validaciones, manejo de errores y escucha en `PORT=3000` |
| **Pruebas** | Usar pruebas incluidas en el proyecto. |

---
