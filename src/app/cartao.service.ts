import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class CartaoService {
    
    constructor(private http: HttpClient) {

    }

    public getAllCartoes(idUsuario: any): any {
        return this.http.get(`${URL_API}cartoes?idUsuario=${idUsuario}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

    public getAllLocais(idUsuario: number): any {
        return this.http.get(`${URL_API}locais?idUsuario=${idUsuario}`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

}