# CRUD Product App (Node.js + MongoDB)

This is a simple backend CRUD application for managing products, built using 
**Node.js**, **Express** and **MongoDB**  — now fully containerized with **Docker**.

# Features

- Create a product (POST)
- Get all products (GET)
- Get a single product by ID (GET /:id) (In progress)
- Update a product (PATCH)              (In progress)
- Delete a product (DELETE)             (In progress)
- Fully dockerized setup
- Unit and integration testing using **Jest**

# Setting up the environment

Before running the app, you need to set up the `.env` file in the root directory of the project. It should contain the following variables:

```plaintext
MONGODB_URI=mongodb://mongo:27017/crud-app
MONGODB_URI_TEST=mongodb://mongo:27017/crud-app-test
```

## Running with Docker

# Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- [Docker Compose](https://docs.docker.com/compose/) (already included in Docker Desktop)

# Start the app

```bash
docker-compose up-d
```
# Running tests

```bash
docker exec -it node-products-app sh
npm test
```

# Terminating app

```bash
docker-compose down -v
```