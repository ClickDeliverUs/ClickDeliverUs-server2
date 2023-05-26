import { AuthService } from './auth.service';
import { SignInDto } from './dto/default-user.dto';
import { SignUpReqDto } from './dto/signup-req.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpReqDto: SignUpReqDto): Promise<boolean>;
    signIn(signInDto: SignInDto): Promise<void>;
}
