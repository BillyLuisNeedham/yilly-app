import { CreateUserRequest } from "../../../domain";

export interface IUserDataSource {
    createUser: (createUserReq: CreateUserRequest) => Promise<Result<void>>
}