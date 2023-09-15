import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export function validateBody (schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const messages = validation.error.details.reduce((message, detail) => message + detail.message + '\n ', '');
      console.log(validation.error);
      res.status(422).send(messages);
    }

    res.locals = validation.value;

    next();
  };
}