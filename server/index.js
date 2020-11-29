const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running PORT => ${PORT}`);
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, "../build")));
