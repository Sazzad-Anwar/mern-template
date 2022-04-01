<!-- PROJECT Title -->
<br />
<h2 align="center"><a href="https://github.com/Sazzad-Anwar/Template">Template for any MERN stack PWA project</a></h2>

A PWA `MERN` stack boilerplate with docker for any project. It has the `mongodb`, `mysql`, `redis` database initialization with `socket` and `express` server. `JWT` has been used for the authentication process. `NGINX` configuration has been used for load balancing of backend that can only be used in the production mode with docker On the frontend react has been initialized with `vite` for small bundling and fast loading for development and build time. On frontend for authentication a custom hook has been used with `Context API` and `SWR` data fetching. Some essential components has been initialized with the package along with `tailwindCSS`. Some more features will be added gradually.

## Installation Manual

First clone the repository and then run the following command to install the dependencies.

```bash
yarn install-packages
```

with npm

```bash
npm run install-packages
```

Initialize the `.env` file for the development and production mode.

```bash
MONGO_URI=mongodb://localhost:27017/mern-template
PORT=8080
REDIS_PORT=6379
ACCESS_TOKEN_SECRET_KEY=
REFRESH_TOKEN_SECRET_KEY=
REFRESH_TOKEN_EXPIRES_IN=1y
ACCESS_TOKEN_EXPIRES_IN=1d
ACCESS_COOKIE_EXPIRES_IN=31536000000
```

To start the server as development use the following command.

```bash
yarn dev-server
```

with npm

```bash
npm run dev-server
```

Navigate to admin folder and run the following command to install the dependencies.

```bash
yarn
```

with npm

```bash
npm install
```

Then run the following command from the admin folder to start the server.

```bash
yarn dev
```

with npm

```bash
npm run dev
```

Or run the following command from the root folder to start the frontend server.

```bash
yarn dev
```

with npm

```bash
npm run dev
```

Before shipping the project to the production mode run the following command to build the frontend from the root folder.

```bash
yarn build-admin
```

with npm

```bash
npm run build-admin
```

To run the whole project on production use the following command using docker.

```bash
docker-compose up -d
```

For the production the whole app will be running on the port 80 as the nginx will be used for load balancing.

Admin panel will be loaded on `http://localhost:8080` and the api routes will be `http://localhost:8080/api/v1`
