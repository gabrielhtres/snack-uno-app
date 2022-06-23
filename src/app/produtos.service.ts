import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class ProdutosService {
    
    constructor(private http: HttpClient) {

    }

    public getProduto(): any {
        return this.http.get(`${URL_API}products`)
            .subscribe((dado: any) => { return dado })
    
    }

    public getProdutoPorId(id: any): any {
        return this.http.get(`${URL_API}products?id_product=${id}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

    public getProdutosPorRestaurante(idRestaurante: any) {
        return this.http.get(`${URL_API}products?id_restaurant=${idRestaurante}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }
}