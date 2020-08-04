import * as express from "express";
import { pingController } from "./controllers/ping";
import { nutritionController } from "./controllers/nutrition";

const app = express();

app.use(pingController);
app.use(nutritionController);

export default app;
