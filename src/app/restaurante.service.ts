import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class RestauranteService {
    
    constructor(private http: HttpClient) {

    }

    public getAllRestaurantes(): any {
        return this.http.get(`${URL_API}restaurantes`)
            .pipe( map( (resposta: any) => { return resposta }), retry(10) )
    }

}