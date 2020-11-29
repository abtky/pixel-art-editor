const express = require("express");
const app = express();
const path = require("path");
const SocketServer = require("./SocketServer");

const rootDir = "../build";
// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, rootDir)));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running PORT => ${PORT}`);
});

const io = new SocketServer(server);
io.init();
