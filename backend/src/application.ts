import * as express from "express";
import { pingController } from "./controllers/ping";
import { nutritionController, healthController, generalDataController } from "./controllers/nutrition";

const app = express();

app.use(pingController);
app.use(nutritionController);
app.use(healthController);
app.use(generalDataController);
// app.use(medsController);

export default app;
