export class UserCreationError extends Error {
  public readonly name = "UserCreationError";

  constructor() {
    super("Usuário não pôde ser criado");
  }
}
