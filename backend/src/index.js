// import express from "express";
// import cors from "cors";
// import { PORT } from "./config.js";
// import { connection } from "./db.js";
// import { dealerRoute } from "./routes/dealer.routes.js";
// import { userRouter } from "./routes/users.routes.js";
// // import { uploadImage } from "./controllers/product.controllers.js";
// import { productRouter } from "./routes/product.routes.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import { categoryRoute } from "./routes/category.routes.js";

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// console.log("Ruta de uploads:", path.join(__dirname, "../uploads"));

// app.use(
//   cors({
//     origin: "*", // Permite solicitudes de cualquier dominio
//     methods: ["GET", "POST"],
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(categoryRoute);
// app.use(dealerRoute);
// app.use(userRouter);
// app.use(productRouter);

// app.listen(PORT, () => {
//   console.log("servidor en el puerto " + PORT);
// });

import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { connection } from "./db.js";
import { dealerRoute } from "./routes/dealer.routes.js";
import { userRouter } from "./routes/users.routes.js";
// import { uploadImage } from "./controllers/product.controllers.js";
import { productRouter } from "./routes/product.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { categoryRoute } from "./routes/category.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración CORS antes de los archivos estáticos
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permite solicitudes de cualquier origen
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Métodos permitidos
  next(); // Pasamos al siguiente middleware
});

// Servir los archivos estáticos desde la carpeta uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
console.log("Ruta de uploads:", path.join(__dirname, "../uploads"));

app.use(
  cors({
    origin: "*", // Permite solicitudes de cualquier dominio
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(categoryRoute);
app.use(dealerRoute);
app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log("servidor en el puerto " + PORT);
});
