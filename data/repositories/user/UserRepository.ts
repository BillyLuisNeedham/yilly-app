import { CreateUserRequest, IUserRepository, User } from '../../../domain'
import { IUserDataSource } from '../../datasources/user-data-source'


export class UserRepository implements IUserRepository {
   private _userDataSource: IUserDataSource

    constructor(userDataSource: IUserDataSource) {
        this._userDataSource = userDataSource
    }

    async createUser (createUserReq: CreateUserRequest) : Promise<User | Error> {
        const result = await this._userDataSource.createUser(createUserReq)
        return result
    }

}

