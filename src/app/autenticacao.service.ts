import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { URL_API } from 'src/app.api'
import { retry, map } from 'rxjs/operators'
import { Http } from '@capacitor-community/http';
import { Usuario } from 'src/shared/usuario.model'

@Injectable()
export class Autenticacao {

    public usuarioAtivo: any
    
    constructor(private http: HttpClient) {
    }

    public validarCadastro(): void {

    }

    public validarLogin(email: 'string', password: 'string'): any {
        // console.log(email, senha)
        // let options = {
        //     url: `${URL_API}users/login`,
        //     headers: { 'Content-Type': 'application/json' },
        //     data: { email, password }
        // }
        // return Http.post(options)

        let headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-Type', 'application/json')

        return this.http.post(
            `${URL_API}users/login`,
            { email, password },
            { headers }
            )
    }

    public cadastrarUsuario(usuario: Usuario): any {
        // console.log(usuario)
        let headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${URL_API}users/signup`,
            usuario,
            { headers }
        )
        .pipe( map( (resposta: any) => {
            this.usuarioAtivo = resposta[0]
            // console.log(this.usuarioAtivo)
            return resposta
        })/*retry(10)*/ )
    }

}