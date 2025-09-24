import { Response } from 'express';

const sendResponse = (res: Response, statusCode: number, data: any, json: boolean = true) => {
	res.status(statusCode);
	if (json) res.json(data);
	else {
		res.set('Content-Type', 'text/html; charset=utf-8');
		res.send(data);
	}
};

export default sendResponse;
