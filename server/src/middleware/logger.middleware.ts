import { format, createLogger, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;

export type CustomErrorType = {
    message: string;
    IP: string | string[] | undefined;
    stack: string;
    userAgent: string;
    requestRoute: string;
};

const logger = ({ message, stack, IP, userAgent }: CustomErrorType) => {
    //Description: Print the error on the error.log page for production
    const logger = createLogger({
        level: 'info',
        format: combine(timestamp(), prettyPrint()),
        transports: [new transports.File({ filename: 'error.log', level: 'error' })]
    });

    logger.log({
        level: 'error',
        message,
        IP,
        userAgent,
        stack,
        occurredAt: new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    });
};

export default logger;
