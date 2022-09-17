import { CrudRepository } from "./crud.repository";

class UsersRepository extends CrudRepository {
  constructor() {
    super("Users");
  }
}

export const usersRepository = new UsersRepository();
export default usersRepository;
