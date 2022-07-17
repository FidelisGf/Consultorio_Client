import { Historico } from "@/model/historico-entity.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

export class HistoricoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8085/api/historicos",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Historico> {
    try {
      return (await this.axiosClient.get<Historico>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Historico>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Historico>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(historico: Historico): Promise<void> {
    try {
      return await this.axiosClient.post("/", historico);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(historico: Historico): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${historico.id}`, historico)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
