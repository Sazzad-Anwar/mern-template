// @Description: All server running configuration is setting up here.
// @CreatedAt:
// @Author-name: Md. Sazzad Bin Anwar

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { join } = require("path");
const compression = require("compression");
const favicon = require("serve-favicon");
const connectMongoDB = require("./config/db/MongoDB.js");
const { errorHandler, notFound } = require("./middlewares/errorHandler.js");
const authRoute = require("./routes/authRoute");
const usersRoute = require("./routes/usersRoute");
const roleRoute = require('./routes/roleRoute');
const api = require('./routes/apiRoutes');
const saveApiRoute = require("./middlewares/saveApiRoute");
dotenv.config();

//This will show the request path for every request only for development mode
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}
app.enable('trust proxy');
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "build")));
app.use(favicon(join(__dirname, "public/images", "favicon.ico")));

//@Description: To use monogdb connection
connectMongoDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", saveApiRoute, usersRoute);
app.use('/api/v1/roles', roleRoute);
app.use('/api/v1/getAPI', api)
app.get("/api/v1/checkStatus", (req, res) =>
  res.json({ status: "Ok", host: req.hostname })
);

app.use(notFound);
app.use(errorHandler);

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
  console.log("Build file connected");
});


module.exports = app;
