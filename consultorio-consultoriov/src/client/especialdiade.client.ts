import axios, { AxiosInstance } from "axios";

import { Especialidade } from "@/model/especialidade.entity.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class EspecialidadeClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8085/api/especialidades",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Especialidade> {
    try {
      return (await this.axiosClient.get<Especialidade>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(especialidade: Especialidade): Promise<void> {
    try {
      return await this.axiosClient.post("/", especialidade);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(especialidade: Especialidade): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${especialidade.id}`, especialidade))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(especialidade: Especialidade): Promise<void> {
    try {
      return (
        await this.axiosClient.put(
          `/desativar/${especialidade.id}`,
          especialidade
        )
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Especialidade>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Especialidade>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
