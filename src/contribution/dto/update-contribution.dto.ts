import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateContributionDto } from './create-contribution.dto';

export class UpdateContributionDto extends PartialType(CreateContributionDto) {
    @IsString()
    duration: string
}
