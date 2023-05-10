import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './categoryDto/create.category.dto';
import { UpdateCategoryDto } from './categoryDto/update.category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}


    @Get()
    getCategory(){
        return this.categoryService.findAll();
    }

    @Post()
    createCategory(@Body() createCategoryDto: CreateCategoryDto){
        return this.categoryService.create(createCategoryDto);
    }

    @Patch('/:userid')
     updateGroup(@Body() updateCategoryDto: UpdateCategoryDto, @Param('userid', ParseIntPipe) userId: number ) {
         return this.categoryService.update(updateCategoryDto, userId);
     }

     @Get('/:userid')
     getUser(@Param('userid', ParseIntPipe) userId: number){
         return this.categoryService.show(userId);
     }

     @Delete('/:userid')
     deleteUser(@Param('userid', ParseIntPipe) userId: number){
         return this.categoryService.delete(userId);
     }
    
}
