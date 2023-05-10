import { IsString } from "class-validator";

export class CreateContributionDto {
    @IsString()
    duration: string
}
