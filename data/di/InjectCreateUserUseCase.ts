import { CreateUserUseCase as useCase } from '../../domain'
import { UserRepository } from '../repositories'
import { provideUserDataSource } from '../datasources'


export class CreateUserUseCase extends useCase {

    constructor() {
        super(provideUserDataSource())
    }
}