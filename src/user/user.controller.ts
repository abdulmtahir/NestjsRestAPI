// import { Controller } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreatUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    // private userService;
    // constructor(userServive: UserService){
    //     this.userService = userServive;
    // }


    // private userService;
    // constructor(){
    //          this.userService = new UserService();
    //      }

    constructor(private userService: UserService){}
    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Post()
    store(@Body() creatUserDto: CreatUserDto) {
        // return req.body;
        return this.userService.create(creatUserDto);
    }

     @Patch('/:userid')
     updateUser(@Body() updateUserDto: UpdateUserDto, @Param('userid', ParseIntPipe) userId: number ) {
         // return req.body;
         return this.userService.update(updateUserDto, userId);
     }

     @Get('/:userid')
     getUser(@Param('userid', ParseIntPipe) userId: number){
         // return param;
         return this.userService.show(userId);
     }

     @Delete('/:userid')
     deleteUser(@Param('userid', ParseIntPipe) userId: number){
         // return param;
         return this.userService.delete(userId);
     }
}
