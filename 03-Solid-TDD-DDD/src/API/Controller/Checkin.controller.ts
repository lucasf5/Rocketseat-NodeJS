import { Checkin } from "@/Domain/Entity/Checkin";
import { CustomErrorInterface } from "@/Infra/Errors/CustomErrors.interface";
import { CheckinRepository } from "@/Infra/Repository/Checkin-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export class CheckinController {
    async register(request: FastifyRequest, reply: FastifyReply):Promise<void> {
        const checkinRepository = new CheckinRepository()

        const checkin = request.body

        try {
            const data = await checkinRepository.create(checkin as Checkin)

            void reply.status(201).send(data)
        } catch (error) {
            const customError = error as CustomErrorInterface

            void reply.status(customError.statusCode).send({
                message: customError.message,
                statusCode: customError.statusCode
            })
        }
    }

    async findAll(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const checkinRepository = new CheckinRepository()

        try {
            const data = await checkinRepository.findAll()

            void reply.status(200).send(data)
        } catch (error) {
            const customError = error as CustomErrorInterface

            void reply.status(customError.statusCode).send({
                message: customError.message,
                statusCode: customError.statusCode
            })
        }
    }
    
}