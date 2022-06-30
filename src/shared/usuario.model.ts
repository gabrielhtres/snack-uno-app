export class Usuario {

    public id: number
    public token: string
    public usuario: string

    constructor(
        public name: string,
        public cpf: string,
        public data_birth: string,
        public telephone: string,
        public email: string,
        public password: string
    ) {

    }
    
}