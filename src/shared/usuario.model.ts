export class Usuario {

    public token: string
    public usuario: string
    public senha: string

    constructor(
        public nome: string,
        public email: string,
        public celular: string,
        public cpf: string,
        public dataNascimento: string
    ) {

    }
    
}