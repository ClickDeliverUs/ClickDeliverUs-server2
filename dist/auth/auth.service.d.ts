import { SignInDto } from './dto/default-user.dto';
import { MemberCRUD } from './repository/auth.repository';
import { SignUpReqDto } from './dto/signup-req.dto';
export declare class AuthService {
    private memberCRUD;
    constructor(memberCRUD: MemberCRUD);
    isDuplicateEmail(id: string): Promise<boolean>;
    register(signUpReqDto: SignUpReqDto): Promise<boolean>;
    signIn(signInDto: SignInDto): Promise<void>;
}
