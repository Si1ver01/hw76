const express = require("express");
const app = express();
const messagesRoute = require("./routes/message.routes");
const PORT = 8000;

app.use(express.json());
app.use("/messages", messagesRoute);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
