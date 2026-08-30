import dotenv from 'dotenv';

dotenv.config();


export const env = {
  PORT: process.env.PORT || 4000,
  isProduction: process.env.NODE_ENV === 'production',
  NODE_ENV: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info'
} as const;
