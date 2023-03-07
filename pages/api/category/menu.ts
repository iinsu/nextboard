import client from "@/util/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const menu = await client.menu.findMany();
    res.status(200).send({ menu: menu });
  } catch (error) {
    res.status(400).send({ error: error });
  }
}