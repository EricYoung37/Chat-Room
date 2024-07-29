# Chat-Room

**Author: Eric Yang**

## Environment Variables

For security reasons, environment variables are not kept in the repository, so you need to create a `backend/.env` for the backend to run.

```
PORT            Port on which the backend runs
MONGODB_URI     Your MongoDB connection configuration
JWT_SECRET      Use any string you like
```

### Instructions for `PORT`:

The project uses `55771` for the server port. When you create your own `.env` with a different port, remember to also adapt all presence of `55771` in the project.

### Instructions for `MONGODB_URI`:

- [Docker Compose](https://docs.docker.com/compose/networking/). Note how the connection string (URI) matches the service name for the database in **the first example**.

- [MongoDB Atlas](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/#:~:text=Connecting%20to%20MongoDB).

## Run the App in Docker

To get started, go to the project's root directory.

```
/root
$ docker compose up
```

To stop,

```
/root
$ docker compose down --rmi all -v
```

`--rmi all -v` removes all images and volumes

Cleanup

```
/root
$ docker system prune
```

## Run the App Locally

### Proxy from frontend to backend needs to be modified:

In `/frontend/package.json`, replace `"proxy": "http://backend:55771"` with

`"proxy": "http://localhost:55771"` or `"proxy": "http://127.0.0.1:55771"`.

### You need to setup a non-container MongoDB database:

Check the MongoDB Atlas documentation.

### When you're ready:

Start the backend and the frontend **in its respective directory**.

```
/backend
$ npm start
```

```
/frontend
$ npm start
```
