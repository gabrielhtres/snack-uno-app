export class Usuario {

    constructor(
        public usuario: string,
        public senha: string,
        public logado: boolean,
        public token: string
    ) {

    }
    
}