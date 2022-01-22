import { CreateUserRequest } from "../dtos/CreateUserRequest";
import { User } from "../models/User";

export interface UserRepository {
    createUser: (createUserReq: CreateUserRequest) => Promise<User>,
}