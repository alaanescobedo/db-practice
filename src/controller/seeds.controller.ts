import { Request, Response } from "express"
import { cleanAll, generateUsers } from '../seeds';

const generate = async (_req: Request, res: Response) => {
  try {
    
    await generateUsers()
    res.status(200)
    res.send('Seeds generated')
  } catch (error) {
    res.status(500)
    console.log(`Error: ${error}`);
  }
}

export const clean = async (_req: Request, res: Response) => {
  try {
    await cleanAll()
    res.status(200)
    res.send('Seeds cleaned')
  } catch (error) {
    res.status(500)
    console.log(`Error: ${error}`);
  }
}

export default {
  generate,
  clean
}