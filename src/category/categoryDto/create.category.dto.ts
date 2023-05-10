import { IsNumber, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    category: string;

    @IsNumber()
    slots: number;
 
    @IsNumber()
    slotsTaken: number;


    @IsNumber()
    slotsRemain: number;
}