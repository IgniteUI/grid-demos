import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const angularApp = new AngularAppEngine();

export const reqHandler = createRequestHandler(async (req: Request) => {
  const res: Response|null = await angularApp.handle(req);
  return res;
});
