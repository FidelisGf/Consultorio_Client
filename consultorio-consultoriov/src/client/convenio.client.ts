import { Convenio } from "@/model/convenio-entity.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import axios, { AxiosInstance } from "axios";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class ConvenioClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8085/api/convenios',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Convenio> {
        try {
            return (await this.axiosClient.get<Convenio>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject()
        }
    }

  	public async findByFiltrosPaginado(pageRequest : PageRequest): Promise<PageResponse<Convenio>> {
		try {
			
			let requestPath = ''
			
			requestPath += `?page=${pageRequest.currentPage}`
			requestPath += `&size=${pageRequest.pageSize}`
			requestPath += `&sort=${pageRequest.sortField === undefined 
				? '' : pageRequest.sortField},${pageRequest.direction}`
			
			return (await this.axiosClient.get<PageResponse<Convenio>>(requestPath, 
				{ 
					params: { filtros: pageRequest.filter } 
				}
			)).data
		} catch (error:any) { 
			return Promise.reject(error.response) 
		}
  	}

	public async cadastrar(convenio: Convenio): Promise<void> {
		try {
			return (await this.axiosClient.post('/', convenio))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(convenio: Convenio): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${convenio.id}`, convenio)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(convenio: Convenio): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${convenio.id}`, convenio)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}