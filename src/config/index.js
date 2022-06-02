import dotenv from "dotenv";

dotenv.config();

export default { password: process.env.password, dbURL: process.env.dbURL, port: process.env.port };
