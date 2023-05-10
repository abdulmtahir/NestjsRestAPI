import { IsBoolean, IsBooleanString, IsDate, IsDateString, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateGroupDto {
    // @IsNumber()
    // id: number;

    @IsString()
    name: string;

    @IsBoolean()
    collectPay: boolean;

    // @IsDateString( { strict: true } as any )
    // month: Date

    // @IsDate()
    // month: Date

}