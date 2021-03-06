import { Request, Response } from "express";

import CreateProductService from "../../../services/CreateProductService";
import ListProducts from "../../../services/ListProducts";
import FindProduct from "../../../services/FindProduct";
import UpdateProduct from "../../../services/UpdateProduct";
import DeleteProduct from "../../../services/DeleteProduct";

class ProductController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute(data);

    return response.json(product);
  }

  //Listar um novo produto
  async list(request: Request, response: Response) {
    const listProducts = new ListProducts;
    const product = await listProducts.execute();
    return response.json(product);
  }

  //Procurar um produto por id
  async find(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const findProduct = new FindProduct;
    const product = await findProduct.execute(id_n);
    return response.json(product);
  }

  //Atualizar um produto
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const id_n = Number(id);
    const updateProduct = new UpdateProduct;
    const product = await updateProduct.execute(data, id_n);
    return response.json(product);
  }

  //Deletar um produto
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const deleteProduct = new DeleteProduct;
    const product = await deleteProduct.execute(id_n);
    return response.json(product);
  }
}

export default new ProductController();
