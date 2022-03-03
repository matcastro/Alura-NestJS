import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    produtos: Livro[] = [
        // new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
        // new Livro('LIV02', 'Livro Iniciando com FLutter', 39.9),
        // new Livro('LIV03', 'Livro Inteligência Artificial como serviço', 29.9),
    ]

    obterTodos(): Livro[] {
        return this.produtos
    }

    obterUm(id: number): Livro {
        return this.produtos[0]
    }

    criar(produto: Livro) : void{
        produto.id = 100
        this.produtos.push(produto)
    }
 
    alterar(produto: Livro): Livro{
        return produto
    }

    apagar(id: number): void {
        this.produtos.pop()
    }
}