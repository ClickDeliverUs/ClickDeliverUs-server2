import { UserEntity } from '../auth.entity';
import { DataSource, Repository } from 'typeorm';
import { SignUpReqDto } from '../dto/signup-req.dto';
export declare class MemberCRUD extends Repository<UserEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    saveUser(signUpReqDto: SignUpReqDto): Promise<boolean>;
    findUser(id: string): Promise<boolean>;
}
