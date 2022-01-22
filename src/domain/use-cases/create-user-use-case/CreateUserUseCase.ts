import { CreateUserRequest } from '../../dtos'
import { User } from '../../models'
import { UserRepository } from '../../repositories'

interface CreateUserUseCaseInterface {
    run: (createUserRequest: CreateUserRequest) => Promise<User>
}

export class CreateUserUserCase implements CreateUserUseCaseInterface {
    userRepository: UserRepository

    constructor(repo: UserRepository) {
        this.userRepository = repo
    }

    async run(createUserRequest: CreateUserRequest): Promise<User> {
        const result = await this.userRepository.createUser(createUserRequest)

        return result
    }

}
