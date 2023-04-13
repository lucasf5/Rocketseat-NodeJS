import { describe, expect, it, vitest } from "vitest";
import { User } from "@/Domain/Entity/User";
import { compare } from "bcryptjs";
import { UserRepository } from "./User-repository";

interface Sut {
    sut: UserRepository;
}

const makeSut = (): Sut => {
    const sut = new UserRepository();
    return {
        sut,
    };
};

describe("UserRepository", () => {
    describe("findAll", () => {
        it("should return a list of users", () => {
            // TODO
        });
    });

    describe("findById", () => {
        it("should return a user", () => {
            // TODO
        });
    })

    describe("create", async () => {

        it("should create a user", async () => {
            const { sut } = makeSut();
            const mock = vitest.spyOn(sut, "create");

            const user = new User("any_name", "any_email", "any_password_hash", "any_role");

            const returns = await sut.create(user);

            expect(mock).toHaveBeenCalled();
            expect(returns).toBeInstanceOf(User);

            await sut.delete(returns.id as string);

        });

        it("should password is hashed", async () => {
            const { sut } = makeSut();
            const mock = vitest.spyOn(sut, "create");
            
            const user = new User("any_name", "any_email", "any_password_hash", "any_role");

            const returns = await sut.create(user);

            expect(mock).toHaveBeenCalled();

            const passwordHash = await compare("any_password_hash", returns.password_hash);

            expect(passwordHash).toBe(true);

            await sut.delete(returns.id as string);
        });
    });
});