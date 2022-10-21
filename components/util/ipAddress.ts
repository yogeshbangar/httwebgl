import { IncomingMessage } from "http";

export const getIpAddressFromRequest = (req: IncomingMessage) => {
  return (
    ((req.headers["x-forwarded-for"] || "") as string).split(",").pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress
  );
};
export const shortenAddress = (address) =>
  address?.length > 6
    ? `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
    : address;
