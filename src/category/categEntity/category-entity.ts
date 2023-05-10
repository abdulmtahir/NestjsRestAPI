import { Category } from "src/auth/enums/category.enum";
import { groupEntity } from "src/group/GroupEntity/group-entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class categoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categories: Category;

    @Column()
    slots: number;

    @Column()
    slotsTaken: number;

    @Column()
    slotsRemain: number;


    @ManyToOne(() => User, (user) => user.categories)
    user: User;
    

    @ManyToMany((type) => groupEntity, (group) => group.categories, {
        cascade: true
    })
    @JoinTable()
    groups: groupEntity[]
}