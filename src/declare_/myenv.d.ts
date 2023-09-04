import "koa";
import Router from "koa-router";

declare module 'koa' {
  interface ContextDelegatedRequest {
    params: {
      [key: string]: string;
    };
    rootRouter:Router
  }
}
