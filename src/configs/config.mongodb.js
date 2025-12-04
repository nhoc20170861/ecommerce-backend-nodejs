"use strict";

const dev = {
  app: {
    host: "localhost",
    port: process.env.DEV_APP_PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "dbDev",
  },
};
const product = {
  app: {
    host: "localhost",
    port: process.env.PRO_APP_PORT || 5000,
  },
  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || "dbPro",
  },
};
const config = {
  dev,
  product,
};

const env = process.env.NODE_ENV || "dev";

console.log("🚀 ~  config[env]:",  config[env], env)

export default config[env];