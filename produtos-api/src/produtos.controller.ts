import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
        new Produto('LIV02', 'Livro Iniciando com FLutter', 39.9),
        new Produto('LIV03', 'Livro Inteligência Artificial como serviço', 29.9),
    ]

    @Get()
    obterTodos(): Produto[]{
        return this.produtos
    }

    @Get(':id')
    obterUm(@Param() {id}): Produto {
        return this.produtos[0]
    }

    @Post()
    criar(@Body() produto: Produto) : void{
        produto.id = 100
        this.produtos.push(produto)
    }
 
    @Put()
    alterar(@Body() produto: Produto): Produto{
        return produto
    }

    @Delete(':id')
    apagar(@Param() {id}): void {
        this.produtos.pop()
    }
}