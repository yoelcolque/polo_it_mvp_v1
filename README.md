# Proyecto Polo IT - MVP 

**backend en Node.js + Prisma + PostgreSQL** y un **frontend en Next.js (App Router)**

---

## Clonar repositorio

ssh:

```bash
git clone git@github.com:yoelcolque/polo_it_mvp_v1.git
```
https:

```bash
git clone https://github.com/yoelcolque/polo_it_mvp_v1.git
```

-------------------------------------------------------------------


## BACKEND

### 0. Primero ingresar a la carpeta backend

### 1. Instalar dependencias

```bash
npm install
npm run dev
```
### 2. Configurar base de datos (PostgreSQL)

Verificar versión instalada:

```bash
psql --version
```
Recomendado: 16.8

Crear usuario y base de datos:

```bash
sudo -u postgres psql
```
En la consola de PostgresSQL:

```bash
CREATE ROLE adminpolo WITH LOGIN PASSWORD 'adminpolo123';
CREATE DATABASE polo_it_db OWNER adminpolo;
GRANT ALL PRIVILEGES ON DATABASE polo_it_db TO adminpolo;
ALTER ROLE adminpolo CREATEDB;
```

Para salir:

```bash
\q
```

### 3. Crear archivo .env

Dentro del backend, crear un archivo .env e insertar:

```bash
HTTP_PORT=3001
HTTP_IP=0.0.0.0

POSTGRES_USER=adminpolo
POSTGRES_PASSWORD=adminpolo123
POSTGRES_DB=polo_it_db


DATABASE_URL=postgresql://adminpolo:adminpolo123@localhost:5432/polo_it_db
```

### 4. Migrar base de datos con Prisma

```bash
npx prisma migrate dev --name init
```

### 5. Levantar el servidor

```bash
node server.js
```

Servidor disponible en:

```bash
http://localhost:3001
```

---------------------------------------------------------------
## FRONTEND

### 0. Primero ingresar a la carpeta frontend

### 1. Instalar dependencias

```bash
npm install
npm run dev
```

-----------------------------------------------------

### Notas técnicas

    El frontend usa Next.js 15 App Router con componentes cliente ('use client') donde es necesario.

    La base de datos es migrada automáticamente con Prisma.

    El backend está estructurado en capas: rutas, controladores y servicios.

    Las variables sensibles están separadas en un archivo .env.
