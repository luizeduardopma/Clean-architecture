import { User } from "../entities/User";
import { UserResult } from "../entities/UserResult";

export interface IUserRepo {
  exists(email: string): Promise<UserResult>;
  save(user: User): Promise<UserResult>;
  // findById
  // updateById
  // remove
}
