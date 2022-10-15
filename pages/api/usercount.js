import { getUserCount } from "../../components/Firebase/config";

export default (req, res) => {
  getUserCount().then((count) => res.send({ status: "OK", data: count }));
};
