import { IUserRepo } from "../IUserRepo";
import { User } from "../../entities/User";
import { UserResult } from "../../entities/UserResult";
import knex from "../../../../shared/infra/database/index";

class KnexUserRepo implements IUserRepo {
  async exists(email: string): Promise<UserResult> {
    // Forma enxuta: knex('users') = knex.select().from('users')
    const user = await knex
      .select()
      .from("users")
      .where({ email: email })
      .first();

    return user as UserResult;
  }
  async save(user: User): Promise<UserResult> {
    const insertedUser = await knex("users").insert(user);

    const fetchUser: object = await knex("users").where("email", user.email);

    const result = fetchUser as UserResult;

    return result;
  }
}

export { KnexUserRepo };
