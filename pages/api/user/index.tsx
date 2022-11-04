import { getAllUsers } from "../../../components/MongoDB";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  getAllUsers().then((data) => res.send(data));
};
