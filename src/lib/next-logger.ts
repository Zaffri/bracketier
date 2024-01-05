import { headers } from 'next/headers';
import Logger from './logger';

const NextLogger = {
  getTracingHeaders: () => {
    // Can only be used in Next context - not custom server
    const headersList = headers();
    return {
      correlationId: headersList.get('x-correlation-id')
    };
  },
  info: (message?: string, obj: Record<string, any> = {},) => {
    Logger.info({ ...obj, ...NextLogger.getTracingHeaders() }, message);
  },
  error: (error: Error) => {
    const tracingHeaders = NextLogger.getTracingHeaders();
    const ErrorLogger = Logger.child(tracingHeaders);
    ErrorLogger.error(error);
  }
};

export default NextLogger;