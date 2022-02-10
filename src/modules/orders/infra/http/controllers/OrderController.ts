import { Request, Response } from "express";



import CreateOrderService from "../../../services/CreateOrderService";
import FindClientOrder from "../../../services/FindClientOrder";
import FindOrder from "../../../services/FindOrder";
import UpdateOrder from "../../../services/UpdateOrder";
import DeleteOrder from "../../../services/DeleteOrder";
import ListOrders from "../../../services/ListOrders";





class OrderController {

  async create(request: Request, response: Response) {
    const data = request.body;
    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute(data);
    return response.json(order);
  }

  async findClient(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const findClientOrder = new FindClientOrder;
    const order = await findClientOrder.execute(id_n);
    return response.json(order);
  }

  async findOrder(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const findOrder = new FindOrder;
    const order = await findOrder.execute(id_n);
    return response.json(order);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const id_n = Number(id);
    const updateOrder = new UpdateOrder;
    const order = await updateOrder.execute(data, id_n);
    return response.json(order);
  }

  async listOrders(request: Request, response: Response) {
    const listOrders = new ListOrders;
    const order = await listOrders.execute();
    return response.json(order);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const deleteOrder = new DeleteOrder;
    const order = await deleteOrder.execute(id_n);
    return response.json(order);
  }
}

export default new OrderController();
