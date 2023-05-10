import { categoryEntity } from "src/category/categEntity/category-entity";
import { ContributionEntity } from "src/contribution/entities/contribution.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Profile, {cascade: true})
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => categoryEntity, (category) => category.user, { cascade: true} )
    @JoinColumn()
    categories: categoryEntity[];

    @OneToMany(() => ContributionEntity, (contribution) => contribution.user, { cascade: true} )
    @JoinColumn()
    contributions: ContributionEntity[];
}