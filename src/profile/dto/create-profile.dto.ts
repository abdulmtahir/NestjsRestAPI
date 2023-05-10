import { IsAlphanumeric, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProfileDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    username: string;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: Date;

    @IsNumber()
    BVN: number;

    @IsString()
    KYC: string;
    
    @IsNumber()
    accountNumber: number

}
