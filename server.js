const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./routers/projectRouter");
const ResourceRouter = require("./routers/resourceRouter");

const server = express();

//initial GET
server.get("/", (req, res) => {
  res.json({ message: "Server Online" });
});

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

module.exports = server;