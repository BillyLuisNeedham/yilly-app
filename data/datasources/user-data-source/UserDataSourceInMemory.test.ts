
import { User } from "../../../domain";
import { testCreateUserRequest } from "../../../test-utils";
import { UserDataSourceInMemory } from "./UserDataSourceInMemory";

const expectedTestUser: User
    = {
    ...testCreateUserRequest,
    id: 1,
}

const expectedTestUser2: User
    = {
    ...testCreateUserRequest,
    id: 2,
}

describe('UserDataSourceInMemory', () => {
    it('should return the createUserRequest as a User with an id added of its index + 1', async () => {
        const userDataSource = new UserDataSourceInMemory()
        const result = await userDataSource.createUser(testCreateUserRequest)
        const result2 = await userDataSource.createUser(testCreateUserRequest)

        expect(result).toEqual(expectedTestUser)
        expect(result2).toEqual(expectedTestUser2)
    })
});
