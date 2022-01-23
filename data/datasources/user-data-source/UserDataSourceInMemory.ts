import { CreateUserRequest, User } from "../../../domain";
import { IUserDataSource } from "./IUserDataSource";

export class UserDataSourceInMemory implements IUserDataSource {
    private _users: User[] = []

    async createUser(createUserReq: CreateUserRequest): Promise<User| Error>{
        const newUser: User = {
            id: this.getId(),
            ...createUserReq
        }
        this._users.push(newUser)

        return newUser
    }

    private getId(): number {
        return this._users.length + 1
    }
}