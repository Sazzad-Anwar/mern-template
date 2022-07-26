/*
 * @Description: All server running configuration is setting up here.
 * @CreatedAt: Jun 25, 2022
 * @Author-name: Md. Sazzad Bin Anwar
 */

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const { join } = require("path");
const compression = require("compression");
const favicon = require("serve-favicon");
const connectMongoDB = require("./config/db/MongoDB.js");
const { errorHandler, notFound } = require("./middlewares/errorHandler.js");
const authRoute = require("./routes/v1/auth");
const usersRoute = require("./routes/v1/users");
const roleRoute = require("./routes/v1/role");
const categoryRoute = require("./routes/v1/category");
const locationsRoute = require("./routes/v1/locations");
const api = require("./routes/v1/api");
const errorLogRoute = require("./routes/v1/errorLog");
const saveApiRoute = require("./middlewares/saveApiRoute");
const folderRoute = require("./routes/v1/folder");
const uploadRoute = require("./routes/v1/upload");
const appConfigRoute = require("./routes/v1/appConfig");
dotenv.config();

//This will show the request path for every request only for development mode
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("tiny"));
}
app.enable("trust proxy");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(compression());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(join(__dirname, "build")));
app.use(favicon(join(__dirname, "public/images", "favicon.ico")));
app.use(express.urlencoded({ extended: true }));

//@Description: To use monogdb connection
connectMongoDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", saveApiRoute, usersRoute);
app.use("/api/v1/roles", roleRoute);
app.use("/api/v1/getAPI", api);
app.use("/api/v1/locations", locationsRoute);
app.use("/api/v1/categories", saveApiRoute, categoryRoute);
app.use("/api/v1/error-logs", saveApiRoute, errorLogRoute);
app.use("/api/v1/folders", saveApiRoute, folderRoute);
app.use("/api/v1/files", saveApiRoute, uploadRoute);
app.use("/api/v1/app-config", appConfigRoute);
app.use("/api/v1/static", express.static(join(__dirname, "public")));
app.get("/api/v1/checkStatus", (req, res) =>
  res.json({ status: "Ok", host: req.hostname })
);
app.use("*", express.static(join(__dirname, "build")));

// app.get("*", (req, res) => {
//   res.sendFile(join(__dirname, "build", "index.html"));
//   console.log("Build file connected");
// });

app.use(notFound);
app.use(errorHandler);

module.exports = app;
