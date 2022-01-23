import { CreateUserUseCase as useCase } from '../../domain'
import { UserRepository } from '../repositories'
import { provideUserDataSource } from '../datasources'

const injectedUserRepository =
    new UserRepository(provideUserDataSource())

export class CreateUserUseCase extends useCase {
    constructor() {
        super(injectedUserRepository)
    }
}