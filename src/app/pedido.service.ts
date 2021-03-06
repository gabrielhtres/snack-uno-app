import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class PedidoService {

    constructor(private http: HttpClient) {

    }
    
    public getPedidosUsuario(idUsuario: any): any {
        return this.http.get(`${URL_API}pedidos?idUsuario=${idUsuario}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

    public getPedidoId(idPedido: any): any {
        return this.http.get(`${URL_API}pedidos?id=${idPedido}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

    public cadastrarPedido(cesta: any): any {

        let headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        
        return this.http.post(
            `${URL_API}users/login`,
            { cesta },
            { headers }
            )
    }
}