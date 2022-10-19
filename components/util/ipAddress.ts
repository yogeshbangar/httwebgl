import { IncomingMessage } from 'http';

export const getIpAddressFromRequest = (req: IncomingMessage) => {
  return (
    ((req.headers['x-forwarded-for'] || '') as string).split(',').pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress
  );
};
