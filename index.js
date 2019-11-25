
const server = require("./server.js");

const PORT = process.env.PORT || 5080;

server.listen(PORT, () => {
  console.log(`\n=== SERVER RUNNING ON PORT ${PORT}===\n`);
});