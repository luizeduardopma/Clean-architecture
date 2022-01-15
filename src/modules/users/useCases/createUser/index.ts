import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";
import { KnexUserRepo } from "../../repos/drivers/KnexUserRepo";

const userRepo = new KnexUserRepo();

const createUserUseCase = new CreateUserUseCase(userRepo);

const createUserImplementation = new CreateUserController(createUserUseCase);

export { createUserImplementation };
