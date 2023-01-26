import express, { Request, Response } from "express";
import statusCodes from "statusCodes";

const HomeRouter = express.Router();

HomeRouter.get("/", (_req: Request, res: Response) => {
  res.status(statusCodes.OK).json({
    message: "Welcome",
    statusCode: statusCodes.OK,
  });
});

export default HomeRouter;
