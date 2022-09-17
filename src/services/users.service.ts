import { usersRepository } from "../repository"

const getUsers = async () => {
  const data = usersRepository.getAll()
  return data
}

const createUser = async (data: any) => {
  const user = await usersRepository.create(data)
  return user
}

export default {
  getUsers,
  createUser
}