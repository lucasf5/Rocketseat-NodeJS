import express from "express";
import HomeRouter from "./Home";

const Router = (app: any) => {
  app.use(express.json(), HomeRouter);
};

export default Router;
