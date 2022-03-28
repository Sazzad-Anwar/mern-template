import { format as _format, createLogger, transports as _transports } from 'winston';
const { combine, label, timestamp, prettyPrint } = _format;

export function logger(error, stack, IP) {
    //Description: Print the error on the error.log page for production
    const logger = createLogger({
        level: 'info',
        format: combine(
            // label(),
            timestamp(),
            prettyPrint()
        ),
        // defaultMeta: { service: 'user-service' },
        transports: [
            new _transports.File({ filename: 'error.log', level: 'error' }),
        ]
    });

    logger
        .log({
            level: 'error',
            message: error,
            IP,
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
}