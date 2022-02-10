import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import AppError from "../../../shared/errors/AppErrors";

export default class FindAllClientsService {
  public async execute(): Promise<Client[]> {

    const clientRepository = new ClientRepository();
    const clients = await clientRepository.list();

    //Caso o id informado não existe
    if (clients === undefined) {
      throw new AppError("O ID informado não existe");
    }

    return clients;//return client; ela fez com client sem s
  }
}


//execute(id: number): um id:number é sempre passado como parâmetro