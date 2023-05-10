import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './groupDto/group.create.dto';
import { UpdateGroupDto } from './groupDto/group.update.dto';

@Controller('group')
export class GroupController {
    constructor(private groupService: GroupService) {}

    @Get()
    getMyGroup(){
        return this.groupService.findAll();
    }

    @Post()
    store(@Body() createGroupDto: CreateGroupDto){
        return this.groupService.create(createGroupDto);
    }


    @Patch('/:userid')
     updateGroup(@Body() updateGroupDto: UpdateGroupDto, @Param('userid', ParseIntPipe) userId: number ) {
         return this.groupService.update(updateGroupDto, userId);
     }

     @Get('/:userid')
     getUser(@Param('userid', ParseIntPipe) userId: number){
         return this.groupService.show(userId);
     }

     @Delete('/:userid')
     deleteUser(@Param('userid', ParseIntPipe) userId: number){
         return this.groupService.delete(userId);
     }
    
}
