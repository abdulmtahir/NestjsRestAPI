import { IsArray, IsBooleanString, IsDate, IsNumber, IsString } from "class-validator";

export class UpdateGroupDto {
    // @IsNumber()
    // id: number;

    @IsString()
    name: string;

    @IsBooleanString()
    collectPay: boolean;

    @IsDate()
    month: Date

    // @IsArray()
    // list: {
    //     name: string, age: number, choice: string
    // }[]
}