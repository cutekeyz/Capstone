// entry file for express
// all express related logic is here

import express  from "express";
import { errorHandler } from "./middleware/errorHandler.ts";
import { notFound } from "./middleware/notFound.ts";
import cors from "cors";
import { apiRouter } from "./routes/index.ts";


export function createApp() {
  
  const app = express();
 
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));
  app.use(notFound);
  app.use(errorHandler);
  app.use("api", apiRouter);


  return app;

}

