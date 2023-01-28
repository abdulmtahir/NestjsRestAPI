import { IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    name: string;

//     @IsNumber()
//     age: number;

    @IsString()
    email: string;
    
    @IsString()
    password: string;
}