import { Router, Request, Response } from "express";
import { createUserImplementation } from "../../../../modules/users/useCases/createUser";
import { adaptRoute } from "../adapters/ExpressAdapterService";

const router = Router();

router.get("/", (req, res) => {
  return res.json("Funcionando");
});

router.post("/users/new", adaptRoute(createUserImplementation));

export { router };
