import { HttpClient, HttpResponse } from '@angular/common/http'
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

    public validarLogin(): void {
        console.log('Chegou aqui')
    }

}