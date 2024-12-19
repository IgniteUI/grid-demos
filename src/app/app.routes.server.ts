import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'inventory',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'hr-portal',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'finance',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'fleet',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'sales',
    renderMode: RenderMode.Prerender,
  },
];
