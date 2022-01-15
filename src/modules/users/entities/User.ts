import { uuid as v4 } from "uuidv4";

class User {
  public readonly id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(firstName: string, lastName: string, email: string, id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    if (!id) {
      this.id = v4();
    }
  }
}

export { User };
