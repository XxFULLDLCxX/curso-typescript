import { Router } from "express";
import { schemas } from "../schemas/schemas";
import musicController from "../controllers/music-controller";
import { validateBody } from "../middlewares/schema-validate";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateBody(schemas.music), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;