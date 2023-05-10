import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ContributionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    duration: string

    @CreateDateColumn()
    startDate: Date;

    @UpdateDateColumn()
    endDate: Date;

    @ManyToOne(() => User, (user) => user.contributions)
    user: User;
}
