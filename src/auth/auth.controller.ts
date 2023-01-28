import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    // constructor(private userService: UserService) {}
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() loginDto: any) {

        return this.authService.validateUser(loginDto.email, loginDto.password)
    //    const user = await this.userService.showbyEmail(loginDto.email);

        
    // if (user) {
    //     if(user.password === loginDto.password){
    //         return user;
    //     }
    //     return "wrong password";
    // }
    //     return "You have not submit your email";
    }
}
