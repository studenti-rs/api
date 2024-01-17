import { Request, Response } from 'express'

import { asyncHandler } from '../async-handler'

describe('asyncHandler', () => {
  it('should call the provided function and catch any errors', async () => {
    const mockRequest = {} as Request
    const mockResponse = {} as Response
    const mockNext = jest.fn()

    const mockAsyncFunction = jest.fn().mockResolvedValue('Success')

    const middleware = asyncHandler(mockAsyncFunction)
    await middleware(mockRequest, mockResponse, mockNext)

    expect(mockAsyncFunction).toHaveBeenCalledWith(mockRequest, mockResponse)
    expect(mockNext).not.toHaveBeenCalled()
  })

  it('should call the next function with the error if the provided function throws an error', async () => {
    const mockRequest = {} as Request
    const mockResponse = {} as Response
    const mockNext = jest.fn()

    const mockAsyncFunction = jest.fn().mockRejectedValue(new Error('Something went wrong'))

    const middleware = asyncHandler(mockAsyncFunction)
    await middleware(mockRequest, mockResponse, mockNext)

    expect(mockAsyncFunction).toHaveBeenCalledWith(mockRequest, mockResponse)
    expect(mockNext).toHaveBeenCalledWith(new Error('Something went wrong'))
  })
})
