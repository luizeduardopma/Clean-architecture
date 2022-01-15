import { User } from "../../entities/User";
import { IUserRepo } from "../../repos/IUserRepo";
import { CreateUserDTO } from "../createUser/createUserDTO";
import { UserCreationError, UserExistsError } from "../../errors/index";

class CreateUserUseCase {
  constructor(private userRepo: IUserRepo) {}

  async execute(dto: CreateUserDTO) {
    const { firstName, lastName, email } = dto;

    const userAlreadyExists = await this.userRepo.exists(email);

    if (userAlreadyExists) {
      return new UserExistsError();
    }

    const user = new User(firstName, lastName, email);
    const result = await this.userRepo.save(user);

    if (!result) {
      return new UserCreationError();
    }

    return result;
  }
}

export { CreateUserUseCase };
