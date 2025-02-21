import { HttpInterceptorFn } from "@angular/common/http";

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    headers: req.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate'),
  });

  return next(req)
}
