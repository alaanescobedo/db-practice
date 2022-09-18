import { faker } from '@faker-js/faker'
import { usersRepository } from '../repository';

interface User {
  // firstName: string
  // lastName: string
  // username: string
  email: string
  password: string
}

export const generateUsers = async () => {
  console.log('Generating users...');

  const users: User[] = []

  for (let i = 0; i < 10; i++) {
    const name = faker.name.firstName()
    const newUser: User = {
      // firstName: name,
      // lastName: faker.name.lastName(),
      // username: faker.internet.userName(),
      email: faker.internet.email(name).toLowerCase(),
      password: faker.internet.password()
    }
    users.push(newUser)
  }

  for await (const user of users) {
    await usersRepository.create(user)
  }

  console.log('Users generated');
}

export default generateUsers