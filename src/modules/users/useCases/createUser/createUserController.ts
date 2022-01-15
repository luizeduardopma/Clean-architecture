import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { IUserRepo } from "../../repos/IUserRepo";
import { CreateUserDTO } from "../createUser/createUserDTO";
import {
  IController,
  HttpRequest,
  HttpResponse,
  ok,
  fail,
} from "../../../../shared/app/Controller";

class CreateUserController implements IController {
  public useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    console.log("Controller Request:", request);

    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email
    ) {
      return fail("Informações faltando", 400);
    }

    const userDTO: CreateUserDTO = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
    };

    const userCreated = await this.useCase.execute(userDTO);

    if (!userCreated) {
      return fail("Usuário não criado", 500);
    }

    return ok(userCreated);
  }
}

export { CreateUserController };
