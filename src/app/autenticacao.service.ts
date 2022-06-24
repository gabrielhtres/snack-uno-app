import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'

@Injectable()
export class Autenticacao {
    
    constructor(private http: HttpClient) {
    }

    public validarCadastro(): void {

    }

    public validarLogin(email: 'string', password: 'string'): any {
        console.log(email, password)
        let headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${URL_API}users/login`,
            { email, password },
            { headers }
        )
        .pipe( map( (resposta: any) => { return resposta.id })/*, retry(10)*/ )
    }

}