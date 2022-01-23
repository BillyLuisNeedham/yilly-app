import { CreateUserRequest } from '../../dtos'
import { User } from '../../models'
import { IUserRepository } from '../../repositories'

interface ICreateUserUseCase {
    run: (createUserRequest: CreateUserRequest) => Promise<User>
}

export class CreateUserUseCase implements ICreateUserUseCase {
    userRepository: IUserRepository

    constructor(repo: IUserRepository) {
        this.userRepository = repo
    }

    async run(createUserRequest: CreateUserRequest): Promise<User> {
        const result = await this.userRepository.createUser(createUserRequest)

        return result
    }

}

export default CreateUserUseCase
