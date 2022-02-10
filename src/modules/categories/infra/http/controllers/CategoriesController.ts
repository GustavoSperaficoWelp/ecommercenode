import { Request, Response } from "express";


import FindAllCategoriesService from "../../../services/FindAllCategoriesService";
import FindCategoryByIdService from "../../../services/FindCategoryByIdService";

import CreateCategoryService from "../../../services/CreateCategoryService";
import ListCategory from "../../../services/ListCategory";
import UpdateCategory from "../../../services/UpdateCategory";
import DeleteCategory from "../../../services/DeleteCategory";

class CategoriesController {


  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findCategoryById = new FindCategoryByIdService();
    const category = await findCategoryById.execute(Number(id));
    return response.json(category);
  }


  async findAll(request: Request, response: Response): Promise<Response> {
    const findAllCategories = new FindAllCategoriesService();

    const categories = await findAllCategories.execute();

    return response.json(categories);
  }

  async create(request: Request, response: Response) {
    const data = request.body;
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(data);
    return response.json(category);
  }

  async list(request: Request, response: Response) {
    const listClients = new ListCategory;
    const category = await listClients.execute();
    return response.json(category);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const id_n = Number(id);
    const updateCategory = new UpdateCategory;
    const category = await updateCategory.execute(data, id_n);
    return response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const id_n = Number(id);
    const deleteCategory = new DeleteCategory;
    const category = await deleteCategory.execute(id_n);
    return response.json(category);
  }

}

export default new CategoriesController();
