import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { connection } from "./db.js";
import { dealerRoute } from "./routes/dealer.routes.js";
import { userRouter } from "./routes/users.routes.js";
// import { uploadImage } from "./controllers/product.controllers.js";
import { productRouter } from "./routes/product.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(dealerRoute);
app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log("servidor en el puerto " + PORT);
});
