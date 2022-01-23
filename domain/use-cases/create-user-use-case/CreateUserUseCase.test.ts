import CreateUserUseCase from "./CreateUserUseCase"
import { CreateUserRequest } from "../../dtos"
import { User } from "../../models"
import { IUserRepository } from "../../repositories"
import { testCreateUserRequest, testUser } from "../../../test-utils"

const testResultSuccess: Result<User> = {
    ok: true,
    value: testUser
}

const mockUserRepository: IUserRepository = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUser: async (createUserReq: CreateUserRequest) => {
        return testResultSuccess
    }
}

describe('CreateUserUseCase', () => {

    it('should return the value returned by UserRepository', async () => {
        const createUserUseCase = new CreateUserUseCase(mockUserRepository)
        const response = await createUserUseCase.run(testCreateUserRequest)

        expect(response).toEqual(testResultSuccess)
    })
})