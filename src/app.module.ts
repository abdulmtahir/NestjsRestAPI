import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { User } from "./user/entity/user.entity";
// import { UserController } from "./user/user.controller";
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [AppController],
    imports: [UserModule, 
        TypeOrmModule.forRoot({
            type: 'mysql',
            // host: '127.0.0.1',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'lambu7+',
            database: 'nestjs',
            entities: [User],
            synchronize: true,
          }), AuthModule,
    ],
})
export class AppModule {}