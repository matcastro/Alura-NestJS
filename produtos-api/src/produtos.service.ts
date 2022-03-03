import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
        new Produto('LIV02', 'Livro Iniciando com FLutter', 39.9),
        new Produto('LIV03', 'Livro Inteligência Artificial como serviço', 29.9),
    ]

    obterTodos(): Produto[] {
        return this.produtos
    }

    obterUm(id: number): Produto {
        return this.produtos[0]
    }

    criar(produto: Produto) : void{
        produto.id = 100
        this.produtos.push(produto)
    }
 
    alterar(produto: Produto): Produto{
        return produto
    }

    apagar(id: number): void {
        this.produtos.pop()
    }
}