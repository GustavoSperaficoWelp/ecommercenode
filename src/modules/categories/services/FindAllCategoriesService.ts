import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class FindAllCategoriesService {
  public async execute(): Promise<Category[]> {
    const categoryRepository = new CategoryRepository();

    const categories = await categoryRepository.findAll();

    return categories;
  }
}


//Todas estão dentro da category services no original, da pra alterar os caminhos aqui