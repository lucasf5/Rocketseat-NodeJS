import { UserRepository } from "@/Infra/Repository/User-repository";
import { User } from "../Entity/User";

interface AuthenticateUseCaseInput {
  email: string
  password: string
}

interface AuthenticateUseCaseOutput {
  user: User
}

export class AuthenticateUseCase {
    constructor(private userRepository: UserRepository) {
    }

    public async execute({email, password}:AuthenticateUseCaseInput): Promise<AuthenticateUseCaseOutput> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        if (!this.userRepository.checkPassword(password, user.password_hash)) {
            throw new Error("Invalid password");
        }

        return {user};
    }
}