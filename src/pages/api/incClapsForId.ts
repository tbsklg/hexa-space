// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { incClapsForId } from "./claps-store/claps-store";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = JSON.parse(req.body).id;
  res.status(200).json(JSON.stringify({ claps: await incClapsForId(id) }));
}
