import { Request, Response } from 'express'

/**
 * Wraps an asynchronous request handler function with error handling middleware.
 * * This asyncHandler function is a common pattern in Express.js to avoid having to write try/catch
 * * blocks in each asynchronous middleware function. Instead, you can wrap your asynchronous
 * * middleware functions with asyncHandler, and it will automatically catch any errors and pass them
 * * to the next middleware function.
 * @param fn - The asynchronous request handler function.
 * @returns A middleware function that handles asynchronous errors.
 */
export function asyncHandler(fn: (req: Request, res: Response) => Promise<unknown>) {
	return (req: Request, res: Response, next: () => void) => {
		return fn(req, res).catch(next)
	}
}
