import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class FindCategoryByIdService {
  public async execute(id: number): Promise<Category> {
    const categoryRepository = new CategoryRepository();

    const category = await categoryRepository.findbyId(id);

    if (!category) {
      throw new AppError("Categoria não encontrada");
    }

    return category;
  }
}


//Todas estão dentro da category services no original, da pra alterar os caminhos aqui