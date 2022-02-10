import IClientDTO from "modules/clients/dtos/IClientDTO";
import IClientRepository from "modules/clients/repositories/IClientRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientRepository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }
  find(): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<Client | undefined> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<Client[]> {
    await this.ormRepository.delete(id);
    return this.ormRepository.find();
  }

  async update(data: IClientDTO, id: number): Promise<Client> {
    await this.ormRepository.delete(id);
    data.id = id;
    const client = await this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }

  //Buscar um cliente pelo ID
  async findById(id: number): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);
    return client;
  }

  //Listar clientes
  async list(): Promise<Client[]> {
    const clients = await this.ormRepository.find();
    return clients;
  }

  async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }

  async findCPF(cpf: string): Promise<Client | undefined> {
    const list = await this.ormRepository.find();
    var client = undefined;
    (await list).forEach((c: Client) => {
      if (c.cpf == cpf) {
        client = this.ormRepository.findOne(c.id);
      }
    })
    return client;
  }

}

/*                  Esses dois métodos já estão implementados como list() e findById() respectivamente
//Listar clientes
    async find(): Promise<Client[]> {
        return this.ormRepository.find();
    }

    //Buscar um cliente pelo ID
    async findOne(id: number): Promise<Client|undefined> {
        return this.ormRepository.findOne(id);
    }
*/
