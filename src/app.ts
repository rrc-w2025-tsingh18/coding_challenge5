import express from "express";
import dotenv from "dotenv";
import { helmetConfig } from "./config/helmetConfig";
import { corsConfig } from "./config/corsConfig";
import resourceRoutes from "./api/v1/routes/resourceRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swaggerConfig";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmetConfig);
app.use(corsConfig);

app.use("/api/v1", resourceRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;