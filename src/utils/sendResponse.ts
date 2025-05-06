import { Response } from 'express';

const sendResponse = (res: Response, statusCode: number, data: any) => {
  return res.status(statusCode).json(data);
};

export default sendResponse;
