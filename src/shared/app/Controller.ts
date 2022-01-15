type HttpRequest = {
  params?: string;
  query?: string;
  body?: any;
};

type HttpResponse = {
  statusCode: number;
  body: any;
};

interface IController {
  handle(request: HttpRequest): any;
}

function ok(data: any): HttpResponse {
  return {
    statusCode: 200,
    body: data,
  };
}

function fail(data: any, statusCode: number): HttpResponse {
  return {
    statusCode,
    body: data,
  };
}

export { HttpRequest, HttpResponse, IController, ok, fail };
