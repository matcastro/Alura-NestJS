import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService){

    }

    @Get()
    obterTodos(): Produto[]{
        return this.produtosService.obterTodos()
    }

    @Get(':id')
    obterUm(@Param() {id}): Produto {
        return this.produtosService.obterUm(id)
    }

    @Post()
    criar(@Body() produto: Produto) : void{
        produto.id = 100
        this.produtosService.criar(produto)
    }
 
    @Put()
    alterar(@Body() produto: Produto): Produto{
        return this.produtosService.alterar(produto)
    }

    @Delete(':id')
    apagar(@Param() {id}): void {
        this.produtosService.apagar(id)
    }
}