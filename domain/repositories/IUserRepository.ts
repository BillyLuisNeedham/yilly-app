import { CreateUserRequest } from "../dtos/CreateUserRequest";
import { User } from "../models/User";

export interface IUserRepository {
    createUser: (createUserReq: CreateUserRequest) => Promise<User>,
}