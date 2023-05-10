import { categoryEntity } from "src/category/categEntity/category-entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class groupEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    collectPay: boolean;

    // @Column()
    // month: string;

    // @Column( { type: 'timestamptz'} )
    @CreateDateColumn()
    month: Date;

    @ManyToMany((type) => categoryEntity, (category) => category.groups)
    categories: categoryEntity[]
}