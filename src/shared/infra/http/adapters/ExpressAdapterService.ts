import { Request, Response } from "express";
import { IController, HttpRequest } from "../../../app/Controller";

function adaptRoute(controller: IController) {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
    };

    console.log("Adapt Express: ", request.body);

    const httpResponse = await controller.handle(httpRequest);

    return response.status(httpResponse.statusCode).json(httpResponse.body);
  };
}

export { adaptRoute };
