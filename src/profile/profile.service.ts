import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileRepo: Repository<Profile>
  ){}
  create(createProfileDto: CreateProfileDto) {
    return this.profileRepo.save(createProfileDto);
  }

  findAll(): Promise<Profile[]>  {
    return this.profileRepo.find();
  }

  findOne(id: number) {
    return this.profileRepo.findOne( {where: {id: id}} );;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepo.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profileRepo.delete(id);
  }
}
