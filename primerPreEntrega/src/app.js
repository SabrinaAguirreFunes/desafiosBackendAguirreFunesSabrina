//Importación de dependencias
import express from "express";
import prodsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/carts.routes.js";
import { __dirname } from "./path.js";
import path from "path";

//Configuración del server
const PORT = 8080;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", prodsRouter);
app.use("/api/carts", cartsRouter);
app.use("/static", express.static(path.join(__dirname, "/public")));

//Endpoints
app.get("/", (req, res) => {
  res.send("Bienvenido a la primer Pre-Entrega.");
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
