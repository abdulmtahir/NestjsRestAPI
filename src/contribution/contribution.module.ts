import { Module } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContributionEntity } from './entities/contribution.entity';

@Module({
  controllers: [ContributionController],
  providers: [ContributionService],
  imports: [TypeOrmModule.forFeature([ContributionEntity])]
})
export class ContributionModule {}
