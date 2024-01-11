import express from 'express';

import { HealthCheckController } from './healthCheckController';

const healthCheckRouter = express.Router();
const controller = new HealthCheckController();

healthCheckRouter.get('/', controller.status);

export { healthCheckRouter };
