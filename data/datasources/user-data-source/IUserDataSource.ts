import { CreateUserRequest, User } from "../../../domain";

export interface IUserDataSource {
    createUser: (createUserReq: CreateUserRequest) => Promise<User | Error>
}