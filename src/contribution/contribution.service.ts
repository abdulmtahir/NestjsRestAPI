import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';
import { ContributionEntity } from './entities/contribution.entity';

@Injectable()
export class ContributionService {
      constructor(
        @InjectRepository(ContributionEntity)
        private contributeRepo: Repository<ContributionEntity>
      ){}
  create(createContributionDto: CreateContributionDto) {
    return this.contributeRepo.save(createContributionDto);
  }

  findAll(): Promise<ContributionEntity[]> {
    return this.contributeRepo.find();
  }

  findOne(id: number) {
    return this.contributeRepo.findOne( {where: {id: id}} );
  }

  update(id: number, updateContributionDto: UpdateContributionDto) {
    return this.contributeRepo.update(id, updateContributionDto);
  }

  remove(id: number) {
    return this.contributeRepo.delete(id);
  }
}
