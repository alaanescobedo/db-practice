import { Request, Response } from "express"
import { usersService } from '../services';

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await usersService.getUsers()
    res.status(200)
    res.json(users)
  } catch (error) {
    res.status(500)
    console.log(`Error: ${error}`);
  }
}

export default {
  getUsers
}
