import express from 'express';

import { processFile } from '@modules/file-processing/file-processing.controller';

const fileProcessingRoutes = express.Router();

fileProcessingRoutes.get('/', processFile);

export { fileProcessingRoutes };
