import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { User } from "./user/entity/user.entity";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { groupEntity } from "./group/GroupEntity/group-entity";
import { GroupModule } from './group/group.module';
import { categoryEntity } from "./category/categEntity/category-entity";
import { CategoryModule } from "./category/category.module";
import { ContributionModule } from './contribution/contribution.module';
import { ContributionEntity } from "./contribution/entities/contribution.entity";
import { ProfileModule } from './profile/profile.module';
import { Profile } from "./profile/entities/profile.entity";

@Module({
    controllers: [AppController,],
    imports: [UserModule, 
        TypeOrmModule.forRoot({
            type: 'mysql',
            // host: '127.0.0.1',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'lambu7+',
            database: 'nestjs',
            entities: [User, groupEntity, categoryEntity, ContributionEntity, Profile],
            synchronize: true,
          }), AuthModule, GroupModule, CategoryModule, ContributionModule, ProfileModule,
    ],
})
export class AppModule {}