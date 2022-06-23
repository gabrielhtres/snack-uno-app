import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class PedidoService {

    constructor(private http: HttpClient) {

    }
    
    public getPedidosUsuario(idUsuario: any): any {
        return this.http.get(`${URL_API}requests?id_usuario=${idUsuario}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

    public getPedidoId(idPedido: any): any {
        return this.http.get(`${URL_API}requests?id_pedido=${idPedido}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

}