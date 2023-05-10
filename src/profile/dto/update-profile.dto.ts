import { PartialType } from '@nestjs/mapped-types';
import { IsAlphanumeric, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsAlphanumeric()
    @IsNotEmpty()
    username: string;

    @IsDate()
    @IsNotEmpty()
    dateOfBirth: Date;

    @IsNumber()
    BVN: number;

    @IsString()
    KYC: string;
    
    @IsNumber()
    accountNumber: number

}
