import { IsNumber, IsString } from "class-validator";

export class UpdateCategoryDto {
    @IsString()
    category: string;

    @IsNumber()
    slots: number;


    @IsNumber()
    slotsTaken: number;


    @IsNumber()
    slotsRemain: number;
}