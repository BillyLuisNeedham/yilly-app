import { CreateUserRequest } from "../dtos/CreateUserRequest"
import { User } from "../models";

export interface IUserRepository {
    createUser: (createUserReq: CreateUserRequest) => Promise<Result<User>>,
}