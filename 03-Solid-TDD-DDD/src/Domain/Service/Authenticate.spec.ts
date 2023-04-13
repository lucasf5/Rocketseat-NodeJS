import { UserRepository } from "@/Infra/Repository/User-repository";
import { describe, it, expect, beforeEach } from "vitest";
import { AuthenticateUseCase } from "./Authenticate";

interface IAuthenticateSut {
    sut: UserRepository
}

const makeSut = (): IAuthenticateSut => {
    const sut = new UserRepository();
    return { sut };
};

describe("Authenticate", () => {

    it("should return a token", async() => {
        const { sut } = makeSut();

        const user = new AuthenticateUseCase(sut);

        const result = await user.execute({
            email: "lucasfpnt@gmail.com",
            password: "123456"
        });

        expect(result).toBeDefined();
    });

    it("should return a error", async () => {
        const { sut } = makeSut();

        const user = new AuthenticateUseCase(sut);

        await user.execute({
            email: "lucasfpnt2@gmail.com",
            password: "123456"
        }).catch((err) => {
            expect(err.message).toBe("User not found");
        });

    });

    it("should return a error", async () => {
        const { sut } = makeSut();

        const user = new AuthenticateUseCase(sut);

        await user.execute({
            email: "lucasfpnt@gmail.com",
            password: "12345"
        }).catch((err) => {
            expect(err.message).toBe("Invalid password");
        });

    });
});