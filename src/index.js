import express from "express";
import config from "./config/index.js";
import connection from "./database/connection.js";
import expressApp from "./express-app.js";

const startServer = async () => {
  const app = express();
  await connection();
  expressApp(app);
  app
    .listen(config.port, () => {
      console.log(`server started listening at port:${config.port}`);
    })
    .on("error", (error) => {
      console.log("error -> ", error);
    });
};

startServer();
