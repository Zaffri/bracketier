import type { IncomingMessage, ServerResponse } from 'http';
import type { Logger as PinoLogger } from 'pino';
import pino from 'pino';

const CUSTOM_LEVELS = {
  request: 36,
  response: 37,
};

export default class Logger {
  #logger: PinoLogger<'request' | 'response'>;
  static instance: Logger;

  constructor () {
    this.#logger = pino({
      customLevels: {
        request: CUSTOM_LEVELS.request,
        response: CUSTOM_LEVELS.response,
      }
    });
  }

  getLogger () {
    return this.#logger;
  }

  static getLogger () {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance.getLogger();
  }

  static getTracingFieldsFromHeaders (req: IncomingMessage) {
    return {
      correlationId: req.headers['x-correlation-id'],
    }
  }

  static info (obj: Record<string, any>, msg?: string | undefined, ...args: any[]) {
    Logger.getLogger().info(
      obj,
      msg,
      ...args
    );
  }

  static request (req: IncomingMessage) {
    Logger.getLogger().request({
      type: 'request',
      method: req.method,
      url: req.url,
      ...Logger.getTracingFieldsFromHeaders(req),
    });
  }

  static response (res: ServerResponse<IncomingMessage> & { req: IncomingMessage }) {
    Logger.getLogger().response({
      type: 'response',
      status: res.statusCode,
      method: res.req.method,
      url: res.req.url,
      ...Logger.getTracingFieldsFromHeaders(res.req),
    });
  }

  static error (obj: any, msg?: string | undefined, ...args: any[]) {
    Logger.getLogger().error(obj, msg, ...args);
  }

  static child (obj: Record<string, any>) {
    return Logger.getLogger().child(obj);
  }
};
