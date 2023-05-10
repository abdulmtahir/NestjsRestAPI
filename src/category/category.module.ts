import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoryEntity } from './categEntity/category-entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
    controllers: [CategoryController],
    providers: [CategoryService],
    imports: [TypeOrmModule.forFeature([categoryEntity])]
})
export class CategoryModule {}
