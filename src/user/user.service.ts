import { BadRequestException, HttpException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Request } from 'express';
import { Repository, Unique } from 'typeorm';
import { CreatUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    get(): Promise<User[]> {
        return  this.userRepository.find();
    }

    // create(creatUserDto: CreatUserDto){
    //     try {
    //         return this.userRepository.save(creatUserDto);    
    //     } catch (error) {
    //         throw new UnprocessableEntityException('The account for this email already exist');
    //     }    
    // }


    public create(creatUserDto: Partial<User>): Promise<User> {
        return this.userRepository.save(creatUserDto).catch((error) => {
          if (/(email)+(already exists)/) {
            throw new BadRequestException(
              'Account with this email already exists.',
            );
          }
          return error;
        });
      }

    update(updateUserDto: UpdateUserDto, userId: number){
        return this.userRepository.update(userId, updateUserDto)
    }

    show(userId: number){
        return this.userRepository.findOne({where: {id: userId}});
    }

    showbyEmail(email: string) {
        return this.userRepository.findOne({where: {email} })
    }

    delete(userId: number){
        return this.userRepository.delete(userId);
    }
}
  