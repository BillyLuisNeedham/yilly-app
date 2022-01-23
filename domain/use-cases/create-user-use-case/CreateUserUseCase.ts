import { CreateUserRequest } from '../../dtos'
import { User } from '../../models'
import { IUserRepository } from '../../repositories'


interface ICreateUserUseCase {
    run: (createUserRequest: CreateUserRequest) => Promise<User | Error>
}

// TODO refactor to return Promise<Result<User>>
export class CreateUserUseCase implements ICreateUserUseCase {
    private _userRepository: IUserRepository

    constructor(repo: IUserRepository) {
        this._userRepository = repo
    }

    async run(createUserRequest: CreateUserRequest): Promise<User | Error> {
        const result = await this._userRepository.createUser(createUserRequest)

        return result
    }

}

export default CreateUserUseCase
