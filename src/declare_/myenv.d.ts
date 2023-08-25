import "koa";

declare module 'koa' {
  interface Context {
    params: {
      [key: string]: string;
    };
  }
}