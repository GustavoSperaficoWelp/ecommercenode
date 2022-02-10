import { Router } from "express";
import OrderController from "../controllers/OrderController";

const routes = Router();

routes.post("/", OrderController.create);

routes.get("/clientes/:id", OrderController.findClient);

routes.get("/:id", OrderController.findOrder);

routes.put("/:id", OrderController.update);

routes.delete("/:id", OrderController.delete);

routes.get("/", OrderController.listOrders);

export default routes;
