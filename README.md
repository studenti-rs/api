# studenti.rs API

[![Docker Image CI](https://github.com/studenti-rs/api/actions/workflows/docker-image.yml/badge.svg?branch=main)](https://github.com/studenti-rs/api/actions/workflows/docker-image.yml)
[![CodeQL](https://github.com/studenti-rs/api/actions/workflows/codeql.yml/badge.svg)](https://github.com/studenti-rs/api/actions/workflows/codeql.yml)
[![Build Express+Typescript Application](https://github.com/studenti-rs/api/actions/workflows/test.yml/badge.svg)](https://github.com/studenti-rs/api/actions/workflows/test.yml)

## Introduction

This project was bootstrapped using [Express Typescript Boilerplate](https://github.com/edwinhern/express-typescript-2024).

It's a Node.js Application using Express and Typescript.

### Available Scripts

Below are Scripts that can be ran and found in package.json file

- Development Mode: `npm run dev`
- Build Project: `npm run build`
- Production Mode: `npm run start` or `npm run docker:start`

## Source Folder Structure

```
.
├── common
│   ├── middleware
│   │   ├── compressFilter.ts
│   │   ├── errorHandler.ts
│   │   ├── index.ts
│   │   ├── rateLimiter.ts
│   │   └── requestLogger.ts
│   ├── models
│   │   └── serviceResponse.ts
│   └── utils
│       ├── compressFilter.ts
│       ├── envConfig.ts
│       └── responseHandler.ts
├── index.ts
├── modules
│   ├── healthCheck
│   │   ├── healthCheckController.ts
│   │   ├── healthCheckRoutes.ts
│   │   └── tests
│   │       └── healthCheckRoutes.test.ts
│   └── user
│       ├── tests
│       │   └── userRoutes.test.ts
│       ├── userController.ts
│       ├── userModel.ts
│       ├── userRepository.ts
│       ├── userRoutes.ts
│       └── userService.ts
└── server.ts

```
