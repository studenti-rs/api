import { Request, Response } from 'express'

import { asyncHandler } from '@common/middleware/async-handler'

export const processFile = asyncHandler(async (_req: Request, res: Response) => {
	res.send('processFile')
})
