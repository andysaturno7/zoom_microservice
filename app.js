const { json } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

//middlewares

app.use(cors());
// app.use(urlencoded());
app.use(json());

//rutas
const zoomRoutes = require("./routes/zoom");

app.use("/zoom", zoomRoutes);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
