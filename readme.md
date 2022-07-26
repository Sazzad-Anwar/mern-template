<!-- PROJECT Title -->
<br />
<h2 align="center"><a href="https://github.com/Sazzad-Anwar/Template">Template for any MERN stack PWA project</a></h2>

A PWA `MERN` stack boilerplate with docker for any project. It has the `mongodb`, `mysql`, `redis` database initialization with `socket` and `express` server. `JWT` has been used for the authentication process. `NGINX` configuration has been used for load balancing of backend that can only be used in the production mode with docker On the frontend react has been initialized with `vite` for small bundling and fast loading for development and build time. On frontend for authentication a custom hook has been used with `Context API` and `SWR` data fetching. Some essential components has been initialized with the package along with `tailwindCSS`. Some more features will be added gradually. `Docker` and `Docker Compose` has been used for the deployment to any server seamlessly.

<!-- PROJECT Description -->

The project initially contains the role based access control and authentication for the admin panel and the user panel. The admin panel has the CRUD operations for the `users` and `roles`.

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

````bash
MONGO_URI=mongodb://0.0.0.0:27017/mern-template
PORT=8080
ACCESS_TOKEN_SECRET_KEY=
REFRESH_TOKEN_SECRET_KEY=
REFRESH_TOKEN_EXPIRES_IN=1y
ACCESS_TOKEN_EXPIRES_IN=1d
ACCESS_COOKIE_EXPIRES_IN=31536000000
RESET_PASSWORD_LINK_EXPIRES_IN=5m
API_URL=http://localhost:8080
APP_URL=http://localhost:3000
NODE_ENV=development

# configuration for mysql database
SERVER_DB_DATABASE=localhost
SERVER_DB_USER=root
SERVER_DB_PASSWORD=root

# configuration for redis database
REDIS_HOST=redis
REDIS_PORT=6379

# email configuration
EMAIL_SERVICE=gmail # use "custom" for custom email service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=Mern Template<merntemplate@yopmail.com>

# Company details
COMPANY_NAME=Mern Template


To start the server as development use the following command.

```bash
yarn dev-server
````

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

Or you can run the admin frontend server from the root of the project by running the following command.

```bash
yarn admin-server
```

Or your can run the frontend and backend server together by running the following command.

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
