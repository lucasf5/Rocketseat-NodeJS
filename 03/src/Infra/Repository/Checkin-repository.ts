import { type CheckinRepositoryInterface } from '@/Domain/Repository/CheckinRepository.interface'
import { connection } from '../Database/Connection'
import { CheckIn, Prisma } from '@prisma/client'
import CustomError from '../Errors/CustomErrors'

export class CheckinRepository implements CheckinRepositoryInterface {
  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    try {
      const checkin = await connection.checkIn.create({
      data: {
        user_id: data.user_id,
        gyn_id: data.gyn_id,
      },
    })

      return checkin
      
    } catch (error) {
      throw new CustomError('Error to create checkin', 500)
    }
  }

  async findAll(): Promise<CheckIn[]> {
    try {
      const checkins = await connection.checkIn.findMany()

      return checkins
    } catch (error) {
      throw new CustomError('Error to find all checkins', 500)
    }
  }

  async findById(id: string): Promise<CheckIn | null> {
    try {
      const checkin = await connection.checkIn.findUnique({
        where: {
          id,
        },
      })

      return checkin
    } catch (error) {
      throw new CustomError('Error to find checkin', 500)
    }
  }

  async update(id: string, data: CheckIn): Promise<CheckIn> {
    try {
      const checkin = await connection.checkIn.update({
        where: {
          id,
        },
        data,
      })

      return checkin
    } catch (error) {
      throw new CustomError('Error to update checkin', 500)
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await connection.checkIn.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      throw new CustomError('Error to delete checkin', 500)
    }
  }

}
