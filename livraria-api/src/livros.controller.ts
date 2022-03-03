import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivrosService){

    }

    @Get()
    async obterTodos(): Promise<Livro[]>{
        return this.livrosService.obterTodos()
    }

    @Get(':id')
    async obterUm(@Param() {id}): Promise<Livro> {
        return this.livrosService.obterUm(id)
    }

    @Post()
    async criar(@Body() livro: Livro) : Promise<void>{
        this.livrosService.criar(livro)
    }
 
    @Put()
    async alterar(@Body() livro: Livro): Promise<[number]>{
        return this.livrosService.alterar(livro)
    }

    @Delete(':id')
    async apagar(@Param() {id}): Promise<void> {
        this.livrosService.apagar(id)
    }
}