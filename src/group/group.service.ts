import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './groupDto/group.create.dto';
import { UpdateGroupDto } from './groupDto/group.update.dto';
import { groupEntity } from './GroupEntity/group-entity';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(groupEntity)
        private groupRepository: Repository<groupEntity>,
    ){}

    findAll(): Promise<groupEntity[]> {
        return this.groupRepository.find();
    }

    create(createGroupDto: CreateGroupDto) {
        return this.groupRepository.save(createGroupDto);
    }

    update(updateGroupDto: UpdateGroupDto, userId: number){
        return this.groupRepository.update(userId, updateGroupDto)
    }

    show(userId: number){
        return this.groupRepository.findOne({where: {id: userId}});
    }

    delete(userId: number){
        return this.groupRepository.delete(userId);
    }

}
