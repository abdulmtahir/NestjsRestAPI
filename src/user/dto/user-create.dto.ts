import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreatUserDto {
    @IsString()
    name: string;

    // @IsNumber()
    // age: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}