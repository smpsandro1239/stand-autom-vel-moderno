import { ConsoleLogger, Injectable, LogLevel } from '@nestjs/common';

@Injectable()
export class StructuredLogger extends ConsoleLogger {
  log(message: any, context?: string) {
    this.printStructuredLog('log', message, context);
  }

  error(message: any, stack?: string, context?: string) {
    this.printStructuredLog('error', message, context, stack);
  }

  warn(message: any, context?: string) {
    this.printStructuredLog('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.printStructuredLog('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.printStructuredLog('verbose', message, context);
  }

  private printStructuredLog(level: LogLevel, message: any, context?: string, stack?: string) {
    if (process.env.NODE_ENV === 'production') {
      const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        context,
        message,
        stack,
      };
      console.log(JSON.stringify(logEntry));
    } else {
      super[level](message, context);
    }
  }
}
