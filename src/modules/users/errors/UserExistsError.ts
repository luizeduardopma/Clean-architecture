export class UserExistsError extends Error {
  public readonly name = "UserExistsError";

  constructor() {
    super("Usuário já cadastrado");
  }
}
