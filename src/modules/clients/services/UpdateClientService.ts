import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindClientByIdService from "./FindClientByIdService";

export default class UpdateClientService {
  public async execute(data: IClientDTO, id: number): Promise<Client> {
    const clientRepository = new ClientRepository();
    const findClientById = new FindClientByIdService();

    if (data.id) {
      throw new AppError("ID deve ser informado somente na url");
    }

    if (await clientRepository.findOne(id) === undefined) {
      throw new AppError("O ID informado não existe");
    }

    const client = await clientRepository.update(data, id);
    return client;
  }
}

