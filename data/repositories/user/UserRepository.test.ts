import { CreateUserRequest, User } from "../../../domain"
import { testCreateUserRequest, testUser } from "../../../test-utils"
import { IUserDataSource } from "../../datasources/user-data-source"
import { UserRepository } from "./UserRepository"

const testUserDataSource: IUserDataSource = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUser: async (createUserReq: CreateUserRequest): Promise<User | Error> => {
        return testUser
    }
}

describe('UserRepository', () => {
    it('createUser should return the value of createUser from userDataSource', async () => {
        const userRepo = new UserRepository(testUserDataSource)
        const result = await userRepo.createUser(testCreateUserRequest)

        expect(result).toBe(testUser)
    })
})
