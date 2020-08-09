import * as express from "express";
import { pingController } from "./controllers/ping";
import { nutritionController, healthController, generalDataController, medsController, checksController } from "./controllers/routes";

const app = express();

app.use(pingController);
app.use(nutritionController);
app.use(healthController);
app.use(generalDataController);
app.use(medsController);
app.use(checksController);

export default app;
