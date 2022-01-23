import { IUserDataSource } from "./IUserDataSource"
import { UserDataSourceInMemory } from "./UserDataSourceInMemory"

export const provideUserDataSource = (): IUserDataSource => new UserDataSourceInMemory()