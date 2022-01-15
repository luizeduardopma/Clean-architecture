import { IUserRepo } from "../../repos/IUserRepo";
import { CreateUserDTO } from "../createUser/createUserDTO";
import { MockUserRepo } from "../../repos/drivers/MockUserRepo";
import { CreateUserUseCase } from "../createUser/createUserUseCase";

describe("Teste exemplo", () => {
  test("1 + 1 = 2", () => {
    const sum = 1 + 1;

    expect(sum).toBe(2);
  });
});

let mockUserRepo: MockUserRepo;
let createUserUseCase: CreateUserUseCase;

describe("Use Case: Deve criar usuário", () => {
  beforeAll(() => {
    mockUserRepo = new MockUserRepo();
    createUserUseCase = new CreateUserUseCase(mockUserRepo);
  });

  test("Deve criar um objeto de usuário", async () => {
    // Devo ter um objeto teste que implemente meu User
    const userTest: CreateUserDTO = {
      firstName: "User",
      lastName: "Teste",
      email: "usuario@teste.com",
    };

    // Devo inserir o usuário em um repositório
    const insertedUser = await createUserUseCase.execute(userTest);
    const returnedUser = await mockUserRepo.exists(userTest.email);

    //console.log(returnedUser);

    expect(returnedUser).toBe(insertedUser);
  });
});
