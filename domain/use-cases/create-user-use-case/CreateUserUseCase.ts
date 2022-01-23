import { CreateUserRequest } from '../../dtos'
import { User } from '../../models'
import { UserRepository } from '../../repositories'

interface ICreateUserUseCase {
    run: (createUserRequest: CreateUserRequest) => Promise<User>
}

export class CreateUserUseCase implements ICreateUserUseCase {
    userRepository: UserRepository

    constructor(repo: UserRepository) {
        this.userRepository = repo
    }

    async run(createUserRequest: CreateUserRequest): Promise<User> {
        const result = await this.userRepository.createUser(createUserRequest)

        return result
    }

}

export default CreateUserUseCase
