import { Transform, TransformFnParams } from "class-transformer";
import { Moment, MomentRelativeTime, isMoment } from "moment";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    // @Transform(dateOfBirth => moment(dateOfBirth).format('DD/MM/YY'))
    @Transform( dateOfBirth => isMoment(dateOfBirth) )
    dateOfBirth: Date;

    @Column()
    BVN: number;

    @Column()
    KYC: string;

    @Column()
    accountNumber: number
}
function moment(dateOfBirth: TransformFnParams) {
    throw new Error("Function not implemented.");
}

