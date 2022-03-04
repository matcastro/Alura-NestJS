import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {

    private usuarios: Usuario[] = [{
        id: 1,
        nomeDeUsuario: 'mateus',
        email: 'mateus.ribeiro@fazendo.curso',
        senha: '123456',
        nomeCompleto: 'Mateus Ribeiro',
        dataDeEntrada: new Date()
    }]


    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario{
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario)
    }

    public cria(usuario: Usuario): Usuario{
        this.usuarios.push(usuario)
        return usuario
    }
}