import express from "express";

const app = express();
const port = 3_000;

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
