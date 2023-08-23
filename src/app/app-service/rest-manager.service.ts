import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserService} from './user.service';

@Injectable({
providedIn: 'root'
})
export class RestManagerService {

    constructor(
        private http: HttpClient, 
        private user: UserService) {
        
    }

    private customHeaders(type: string){
        return {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers" : "*",
        'Content-Type': 'application/' + type,
        Authorization: this.user.getToken(),
        }
    }

    /**
     * Metodo que obtiene de un servicio rest, un conjunto de datos sin parametros
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     */
    public getAll(rest: string, controller: string) {
        const headers = new HttpHeaders(this.customHeaders('json'));
        return this.http.get(rest + controller + '/', {headers});
    }

    /**
     * Metodo que obtiene de un servicio rest, un conjunto de datos a partir de un id
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     * @param id id del objeto que se desea obtener
     */
    public getObjectById(rest: string, controller: string, id: string) {
        const headers = new HttpHeaders(this.customHeaders('json'));
        return this.http.get(rest+'/' + controller + '/' + id, { headers });
    }

    /**
     * Metodo que obtiene de un servicio rest, un conjunto de datos sin parametros
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     * @param values mapa de parametros de url
     */
    public getWithParams(rest: string, controller: string, values: Map<string, string>) : any {
        const headers = new HttpHeaders(this.customHeaders('json'));
        let params = this.getParametersWithValues(values);
        return this.http.get(rest +  '/' + controller + (params !== '' ? '?' : '/') + params, {headers});
    }

    /**
     * Metodo que inserta un objeto a traves de un servicio rest
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     * @param object objeto a insertar
     */
    public insertObject(rest: string, controller: string, object: any) {
        const headers = new HttpHeaders(this.customHeaders('json'));
        return this.http.post(rest + controller + '/', JSON.stringify(object), {headers});
    }

    /**
     * Metodo que elimina un objeto a traves de un servicio rest a partir de un id
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     * @param id id del objeto que se desea eliminar
     */
    public deleteObjectById(rest: string, controller: string, id: number) {
        const headers = new HttpHeaders(this.customHeaders('json'));
        return this.http.delete(rest + controller + '/' + id.toString(), {headers});
    }

    /**
     * Metodo que modifica un objeto a traves de un servicio rest a partir de un id
     * @param rest dirección del servicio rest y contexto a utilizar
     * @param controller controlador del contexto
     * @param method metodo a invocar
     * @param id id del objeto que se desea modificar
     * @param object objeto con datos modificados
     */
    public editObjectById(rest: string, controller: string, id: number, object: any) {
        const headers = new HttpHeaders(this.customHeaders('json'));
        return this.http.put(rest + controller + '/' + id.toString(), JSON.stringify(object), {headers});
    }

    private getParametersWithValues(values: Map<string, string>): string{
        let params = '';
        values.forEach((value: string, key: string) => {
        if (value !== '' && value !== null) {
            params = params + key + '=' + value + '&';
        }
        });
        return params;
    }

}
  