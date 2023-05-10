import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { groupEntity } from './GroupEntity/group-entity';

@Module({
    controllers: [GroupController],
    providers: [GroupService],
    imports: [TypeOrmModule.forFeature([groupEntity])]

})
export class GroupModule {}
