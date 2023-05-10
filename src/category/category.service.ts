import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { categoryEntity } from './categEntity/category-entity';
import { CreateCategoryDto } from './categoryDto/create.category.dto';
import { UpdateCategoryDto } from './categoryDto/update.category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(categoryEntity)
        private categRepository: Repository<categoryEntity>,
    ){}

    findAll(): Promise<categoryEntity[]> {
        return this.categRepository.find();
    }

    create(createCategoryDto: CreateCategoryDto) {
        return this.categRepository.save(createCategoryDto);
    }

    update(updateCategoryDto: UpdateCategoryDto, userId: number){
        return this.categRepository.update(userId, updateCategoryDto)
    }

    show(userId: number){
        return this.categRepository.findOne({where: {id: userId}});
    }

    delete(userId: number){
        return this.categRepository.delete(userId);
    }

}
