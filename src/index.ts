import { Context, APIGatewayEvent, Callback } from 'aws-lambda';
import { LambdaEnv } from './env';

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const env: LambdaEnv = process.env as any;
};
