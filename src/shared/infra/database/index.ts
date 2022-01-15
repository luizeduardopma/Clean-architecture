import Knex from "knex";
import knexConfig from "../../../config/knexfile";

const knex = Knex(knexConfig["development"]);

export default knex;
