import { IUserRepo } from "../IUserRepo";
import { User } from "../../entities/User";
import { UserResult } from "../../entities/UserResult";

class MockUserRepo implements IUserRepo {
  userRepo: User[] = [];

  async exists(email: string): Promise<UserResult> {
    const user = this.userRepo.find((user) => user.email === email);

    return user as UserResult;
  }

  async save(user: User): Promise<UserResult> {
    this.userRepo.push(user);
    return user as UserResult;
  }
}

export { MockUserRepo };
